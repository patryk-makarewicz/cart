import '../globals.css';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lng: any;
  };
};

export default function RootLayout({ children, params: { lng } }: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
