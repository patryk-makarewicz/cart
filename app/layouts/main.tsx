'use client';

import { Suspense, useEffect, useState } from 'react';

import Loading from '../[lng]/loading';
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
    <div className="animate-fadeIn visible flex h-screen flex-col">
      <Header lng={lng} />
      <Suspense fallback={<Loading />}>
        <main className="m-auto flex w-full max-w-screen-xl flex-1 overflow-y-auto p-2.5">{children}</main>
      </Suspense>
      <Footer lng={lng} />
    </div>
  );
};

export default MainLayout;
