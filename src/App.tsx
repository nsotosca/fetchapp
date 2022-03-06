import React from 'react';
import './i18n';

import Home from './containers/Home/Home';
import Container from './components/Container/Container';

const App :React.FC = () :JSX.Element =>{
  return(
    <Container>
      <Home />
    </Container>
  );
};
export default App;
