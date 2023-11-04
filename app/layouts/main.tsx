'use client';

import { useEffect, useState } from 'react';

import { Footer } from '../components/footer/footer';
import { Header } from '../components/header';
import LoadingOnStart from '../utils/loadingOnStart';

type MainLayoutProps = {
  children: React.ReactNode;
  lng: string;
};

const MainLayout = ({ children, lng }: MainLayoutProps) => {
  const [isLoadingApp, setIsLoadingApp] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoadingApp(false);
    }
  }, []);

  if (isLoadingApp) {
    return <LoadingOnStart />;
  }

  return (
    <div className="animate-fadeIn visible">
      <Header lng={lng} />
      <main className="m-auto flex max-w-screen-xl min-h-[calc(100vh-120px)] p-2.5 mt-[60px]">{children}</main>
      <Footer lng={lng} />
    </div>
  );
};

export default MainLayout;
