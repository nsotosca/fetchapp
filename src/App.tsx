import React from 'react';
import './i18n';

import Routes from './containers/Routes';
import MainLayout from './components/MainLayout';
import './App.scss';

const App :React.FC = () :JSX.Element =>{
  return(
    <MainLayout>
      <Routes />
    </MainLayout>
  );
};
export default App;
