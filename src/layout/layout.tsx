import GlobalStyles from '@/styles/GlobalStyles';
import Head from 'next/head';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>New Next App</title>
        <meta name="description" content="New Next App" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="New Next App" />
        <meta property="og:title" content="Users App" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/cover.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <GlobalStyles />
        <div>Header</div>
        <main>{children}</main>
        <div>Footer</div>
      </>
    </>
  );
};
