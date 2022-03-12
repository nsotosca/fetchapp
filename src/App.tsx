import React from 'react';
import './i18n';

import Characters from './containers/Characters';
import { Container, Footer, Header } from './components';

import './App.scss';

const App :React.FC = () :JSX.Element =>{
  return(
    <Container classes='app-container' >
      <>
        <Header />
        <Container isInnerCointainer classes='app-main-container'>
          <Characters />
        </Container>
        <Footer />
      </>
    </Container>
  );
};
export default App;
