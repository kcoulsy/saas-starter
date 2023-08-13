import L from '@src/i18n/i18n-node';
import Providers from './providers';
import '@src/styles/globals.css';

export async function generateMetadata() {
  return {
    title: L.en.common.meta.title(),
    description: L.en.common.meta.description(),
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
