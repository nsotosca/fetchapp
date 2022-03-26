import React from 'react';
import { useParams } from 'react-router-dom';

import { Post } from '../../components';
import { getPlanet } from '../../core/api';
import { ResultDTO } from '../../DTOs/ApiDTO';
import { useApi } from '../../utils/Hooks';
import { getKeysFromObj } from '../../utils/utils';

const Planet = (): JSX.Element => {
  const { id } = useParams();
  const { response, loading  } = useApi( getPlanet, id );
  const planet = response as ResultDTO;

  const customProperties = [
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population'
  ];
  const newPlanet = getKeysFromObj( planet, customProperties );

  return (
    <Post title={planet.name} isLoading={loading} data={newPlanet}/>
  );
};

export default Planet;
