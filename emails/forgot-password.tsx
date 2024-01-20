import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { pageRoutes } from '../src/constants/routes';
import L from '../src/i18n/i18n-node';
import type { Locales } from '../src/i18n/i18n-types';

interface ForgotPasswordEmailProps {
  token?: string;
  locale?: Locales;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.BASE_URL;

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '560px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0',
};

const paragraph = {
  margin: '0 0 15px',
  fontSize: '15px',
  lineHeight: '1.4',
  color: '#3c4149',
};

const buttonContainer = {
  padding: '27px 0 27px',
};

const button = {
  backgroundColor: '#5e6ad2',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '11px 23px',
};

const reportLink = {
  fontSize: '14px',
  color: '#b4becc',
};

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px',
};

const code = {
  fontFamily: 'monospace',
  fontWeight: '700',
  padding: '1px 4px',
  backgroundColor: '#dfe1e4',
  letterSpacing: '-0.3px',
  fontSize: '21px',
  borderRadius: '4px',
  color: '#3c4149',
};

export const ForgotPasswordEmail = ({ token = 'tt226-5398x', locale = 'en' }: ForgotPasswordEmailProps) => (
  <Html>
    <Head />
    <Preview>{L[locale].emails.forgotPassword.preview()}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={`${baseUrl}/static/linear-logo.png`} width="42" height="42" alt="Saas Name" style={logo} />
        <Heading style={heading}>{L[locale].emails.forgotPassword.heading()}</Heading>
        <Text style={paragraph}>{L[locale].emails.forgotPassword.body()}</Text>
        <Section style={buttonContainer}>
          <Button style={button} href={`${baseUrl}${pageRoutes.resetPassword(token)}`}>
            {L[locale].emails.forgotPassword.button()}
          </Button>
        </Section>
        <Text style={paragraph}>{L[locale].emails.forgotPassword.subcopy()}</Text>
        <code style={code}>{`${baseUrl}${pageRoutes.resetPassword(token)}`}</code>
        <Hr style={hr} />
        <Link href={baseUrl} style={reportLink}>
          {L[locale].emails.forgotPassword.footerLink()}
        </Link>
      </Container>
    </Body>
  </Html>
);

export default ForgotPasswordEmail;
