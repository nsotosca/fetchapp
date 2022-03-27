import React from 'react';

import { Header, Container, Footer } from './layouts';

import './MainLayout.scss';

type MainLayoutProps = {
  children: JSX.Element;
}

const MainLayout = ( { children } : MainLayoutProps ): JSX.Element => {
  return (
    <Container classes='app-container' >
      <>
        <Header />
        <Container isInnerCointainer classes='app-container-inner'>
          {children}
        </Container>
        <Footer />
      </>
    </Container>
  );
};

export default MainLayout;