import React from 'react';

import { Container } from '@mui/material';

import { Header, Footer } from './layouts';

import './MainLayout.scss';

type MainLayoutProps = {
  children: JSX.Element;
}

const MainLayout = ( { children } : MainLayoutProps ): JSX.Element => {
  return (
    <Container disableGutters maxWidth={false} className='main-layout-container'>
      <Header />
      <Container disableGutters={false} maxWidth='lg' className='main-layout-container-inner'>
        {children}
      </Container>
      <Footer />
    </Container>
  );
};

export default MainLayout;