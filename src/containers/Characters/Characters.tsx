import React, { useState } from 'react';

import { Posts } from '../../components';
import { getCharacters } from '../../core/api';
import ResultsDTO from '../../DTOs/ApiDTO';
import { useApi } from '../../utils/Hooks';
import { getKeysFromArr } from '../../utils/utils';

const Characters = (): JSX.Element => {
  const [ page, setPage ] = useState( 1 );
  const { response, loading  } = useApi( getCharacters, page.toString() );
  const characters = response as ResultsDTO;

  const customProperties = [ 'name', 'url' ];
  const newResults = getKeysFromArr( characters.results, customProperties ) as {name:string, url:string}[];

  return (
    <Posts title='characters.title'
      data={newResults}
      totalDataCount={characters.count}
      page={page}
      onSetPage={setPage}
      isLoading={loading}
    />
  );
};

export default Characters;
