import React from 'react';
import { Routes as Rts, Route } from 'react-router-dom';

import Home from '../../containers/Home';
import Characters from '../../containers/Characters';
import Character from '../../containers/Character';
import Planets from '../Planets';
import Planet from '../Planet';

const Routes :React.FC = () :JSX.Element =>{
  return(
    <Rts>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<Characters />}/>
      <Route path="/people/:id" element={<Character />}/>
      <Route path="/planets" element={<Planets />}/>
      <Route path="/planets/:id" element={<Planet />}/>
    </Rts>
  );
};
export default Routes;
