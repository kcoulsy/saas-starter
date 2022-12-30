import sendGridMail from '@sendgrid/mail';
import { env } from '@src/env/server.mjs';

interface SendEmailArgs {
  email: string;
  subject: string;
  text: string;
  html: string;
}

export const sendEmail = async ({ email, subject, text, html }: SendEmailArgs) => {
  sendGridMail.setApiKey(env.SENDGRID_API_KEY);

  const msg = {
    from: env.SENDGRID_FROM_EMAIL,
    to: email,
    subject,
    text,
    html,
  };

  await sendGridMail.send(msg);
};
