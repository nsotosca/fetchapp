import React from 'react';
import { useParams } from 'react-router-dom';

import { Post } from '../../components';
import { getCharacter } from '../../core/api';
import { ResultDTO } from '../../DTOs/ApiDTO';
import { useApi } from '../../utils/Hooks';
import { getKeysFromObj } from '../../utils/utils';

const Character = (): JSX.Element => {
  const { id } = useParams();
  const { response, loading  } = useApi( getCharacter, id );
  const character = response as ResultDTO;

  const customProperties = [
    'birth_year',
    'eye_color',
    'gender',
    'hair_color',
    'height',
    'mass',
    'skin_color',
    'population'
  ];
  const newCharacter = getKeysFromObj( character, customProperties );

  return (
    <Post title={character.name} isLoading={loading} data={newCharacter}/>
  );
};

export default Character;
