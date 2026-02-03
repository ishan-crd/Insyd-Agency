import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

const TO_EMAIL = 'ishan@insyd.in';

export const POST: RequestHandler = async ({ request }) => {
  const apiKey = env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return json(
      {
        ok: false,
        error:
          'RESEND_API_KEY is missing. Add it to .env (local) or Vercel → Project Settings → Environment Variables, then redeploy.'
      },
      { status: 503 }
    );
  }

  const formData = await request.formData();
  const name = (formData.get('name') as string)?.trim() || '';
  const email = (formData.get('email') as string)?.trim() || '';
  const message = (formData.get('message') as string)?.trim() || '';

  if (!name || !email || !message) {
    return json({ ok: false, error: 'Name, email and message are required' }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const escapedMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // 1. Email to Insyd
  const { data, error } = await resend.emails.send({
    from: 'Insyd <ishan@insyd.in>',
    to: [TO_EMAIL],
    replyTo: email,
    subject: `Contact from ${name} (${email})`,
    html: `
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; font-family: inherit;">${escapedMessage}</pre>
    `
  });

  if (error) {
    console.error('Resend error:', error);
    return json({ ok: false, error: 'Failed to send email' }, { status: 500 });
  }

  // 2. Confirmation email to the person who submitted
  await resend.emails
    .send({
      from: 'Insyd <ishan@insyd.in>',
      to: [email],
      subject: "We've received your message – Insyd",
      html: `
      <p>Hi ${name.replace(/</g, '&lt;').replace(/>/g, '&gt;')},</p>
      <p>Thank you for reaching out! We've received your message and will get back to you soon.</p>
      <p><strong>Your message:</strong></p>
      <pre style="white-space: pre-wrap; font-family: inherit; background: #f5f5f5; padding: 1rem; border-radius: 0.5rem;">${escapedMessage}</pre>
      <p>Best regards,<br />The Insyd Team</p>
    `
    })
    .catch((err) => console.error('Failed to send confirmation email:', err));

  return json({ ok: true, id: data?.id });
};
