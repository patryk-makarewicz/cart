'use client';

import { useEffect, useState } from 'react';
import * as Styled from './main.styled';
import LoadingOnStart from '@/utils/loadingOnStart';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
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
    <Styled.Content>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Styled.Content>
  );
};

export default MainLayout;
