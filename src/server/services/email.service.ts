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
  // await resend.emails.send({
  //   from: env.RESEND_FROM,
  //   to: email,
  //   subject,
  //   html,
  //   text,
  // });
};
