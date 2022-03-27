import React, { useState } from 'react';

import { Posts } from '../../components';
import { getPlanets } from '../../core/api';
import ResultsDTO from '../../DTOs/ApiDTO';
import { useApi } from '../../utils/Hooks';
import { getKeysFromArr } from '../../utils/utils';

const Characters = (): JSX.Element => {
  const [ page, setPage ] = useState( 1 );
  const { response, loading  } = useApi( getPlanets, page.toString() );
  const planets = response as ResultsDTO;

  const customProperties = [ 'name', 'url' ];
  const newResults = getKeysFromArr( planets.results, customProperties ) as {name:string, url:string}[];

  return (
    <Posts title='planets.title'
      data={newResults}
      totalDataCount={planets.count}
      page={page}
      onSetPage={setPage}
      isLoading={loading}
    />
  );
};

export default Characters;
