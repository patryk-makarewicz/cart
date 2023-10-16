import { Inter } from 'next/font/google';

import { dir } from 'i18next';

import { languages } from '../i18n/settings';
import MainLayout from '../layouts/main';
import { ReduxProvider } from '../redux/redux-provider';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cart App',
  description: 'This is app to manage cart',
  category: 'frontend',
  keywords: ['next.js', 'react', 'typescript'],
  openGraph: {
    title: 'Cart App',
    description: 'This is app to manage cart',
    images: ['/next.svg', '/vercel.svg'],
    url: 'https://www.url.com',
    siteName: 'Cart App'
  },
  metadataBase: new URL('https://www.url.com'),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.jpg'
  }
};

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

const RootLayout = ({ children, params: { lng } }: RootLayoutProps) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <ReduxProvider>
          <MainLayout lng={lng}>{children}</MainLayout>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
