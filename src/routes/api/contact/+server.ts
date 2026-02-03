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

  const { data, error } = await resend.emails.send({
    from: 'Insyd Website <onboarding@resend.dev>',
    to: [TO_EMAIL],
    replyTo: email,
    subject: `Contact from ${name} (${email})`,
    html: `
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; font-family: inherit;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
    `
  });

  if (error) {
    console.error('Resend error:', error);
    return json({ ok: false, error: 'Failed to send email' }, { status: 500 });
  }

  return json({ ok: true, id: data?.id });
};
