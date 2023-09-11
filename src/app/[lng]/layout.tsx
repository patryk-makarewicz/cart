import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { Inter } from 'next/font/google';
import GlobalStyles from '@/styles/GlobalStyles';
import StyledComponentsRegistry from '@/lib/registry';
import '../../styles/tailwind.css';

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

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

export default function RootLayout({ children, params: { lng } }: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <header>Header</header>
          <main>{children}</main>
          <footer>Footer</footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
