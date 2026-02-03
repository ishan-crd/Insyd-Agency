import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

const TO_EMAIL = 'ishan@insyd.in';

function escapeHtml(str: string) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function confirmationEmailHtml(name: string, message: string) {
  const safeName = escapeHtml(name);
  const safeMessage = escapeHtml(message);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5; color: #171717;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.07); overflow: hidden;">
          <tr>
            <td style="padding: 40px 40px 24px;">
              <h1 style="margin: 0 0 8px; font-size: 24px; font-weight: 600; color: #171717;">
                <span style="color: #EC4899;">in</span>syd
              </h1>
              <p style="margin: 0; font-size: 14px; color: #6b6b6b;">All Your IT Solutions. One Stop.</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px 32px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #171717;">Hi ${safeName},</p>
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #171717;">Thank you for reaching out! We've received your message and will get back to you soon.</p>
              <p style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #171717;">Your message:</p>
              <div style="background-color: #f4f4f5; border-left: 4px solid #EC4899; padding: 20px; border-radius: 8px; font-size: 15px; line-height: 1.6; color: #171717; white-space: pre-wrap;">${safeMessage}</div>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 40px 40px; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0; font-size: 15px; color: #171717;">Best regards,<br><strong>The Insyd Team</strong></p>
              <p style="margin: 16px 0 0; font-size: 13px; color: #6b6b6b;">
                <a href="mailto:ishan@insyd.in" style="color: #EC4899; text-decoration: none;">ishan@insyd.in</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

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
  const escapedMessage = escapeHtml(message);

  // 1. Email to Insyd
  const { data, error } = await resend.emails.send({
    from: 'Insyd <ishan@insyd.in>',
    to: [TO_EMAIL],
    replyTo: email,
    subject: `Contact from ${name} (${email})`,
    html: `
      <p><strong>From:</strong> ${escapeHtml(name)} &lt;${email}&gt;</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; font-family: inherit;">${escapedMessage}</pre>
    `
  });

  if (error) {
    console.error('Resend error:', error);
    return json({ ok: false, error: 'Failed to send email' }, { status: 500 });
  }

  // 2. Confirmation email to submitter
  await resend.emails
    .send({
      from: 'Insyd <ishan@insyd.in>',
      to: [email],
      subject: "We've received your message – Insyd",
      html: confirmationEmailHtml(name, message)
    })
    .catch((err) => console.error('Failed to send confirmation email:', err));

  return json({ ok: true, id: data?.id });
};
