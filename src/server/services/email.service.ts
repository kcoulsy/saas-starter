'use server';

// import { Resend } from 'resend';
import { env } from '@src/env/server.mjs';

interface SendEmailArgs {
  email: string;
  subject: string;
  text: string;
  html: string;
}
// const resend = new Resend(env.RESEND_API_KEY);

export const sendEmail = async ({ email, subject, text, html }: SendEmailArgs) => {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `noreply <${env.RESEND_FROM}>`,
        to: [email],
        subject,
        html,
        text,
      }),
    });

    const json = await res.json();

    if (json.error) {
      console.log(json.error);
    }
  } catch (e) {
    console.log(e);
  }
  // await resend.emails.send({
  //   from: env.RESEND_FROM,
  //   to: email,
  //   subject,
  //   html,
  //   text,
  // });
};
