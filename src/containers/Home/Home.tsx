import React from 'react';

import Text from '../../components/Text';
import './Home.scss';

import StarWars from '../../assets/images/star-wars.svg';

const Home = (): JSX.Element => {
  return (
    <div className='home'>
      <img src={StarWars} className='home-logo' alt='Star Wars'/>
      <Text>Star Wars, conocida también en español como La guerra de las galaxias,
        es una franquicia compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense
        George Lucas en la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012.
        Su trama describe las vivencias de un grupo de personajes que habitan en una galaxia ficticia e interactúan
        con elementos como «la Fuerza», un campo de energía metafísico y omnipresente que posee un «lado luminoso»
        impulsado por la sabiduría, la nobleza y la justicia y utilizado por los Jedi, y un lado oscuro usado por
        los Sith y provocado por la ira, el miedo y el odio.</Text>
    </div>
  );
};

export default Home;
