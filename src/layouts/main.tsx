'use client';

import { useEffect, useState } from 'react';
import LoadingOnStart from '@/utils/loadingOnStart';

import styled from 'styled-components';
import Header from '@/components/header';

const Content = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  visibility: visible;
  animation: fadeIn 0.5s;
`;

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
    <Content>
      <Header lng={lng} />
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </Content>
  );
};

export default MainLayout;
