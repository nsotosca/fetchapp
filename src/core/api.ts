import axios from 'axios';

import ResultsDTO from '../DTOs/ApiDTO';
import { getKeysFromArr } from '../utils/utils';

export const baseUrl = 'https://swapi.dev/api';
const properties = {
  characters : [ 'name', 'url' ],
  planets    : [ 'name', 'url' ]
} ;

export const getCharacters = async ( page?: string ): Promise<ResultsDTO> => {
  let res;
  res = await axios.get( `${baseUrl}/people${page ? '/?page=' + page : '/'}` );
  const newResults = getKeysFromArr( res.data.results, properties.characters );
  res = {
    ...res,
    data : {
      ...res.data,
      results : newResults
    }
  };

  return res.data;
};

export const getCharacter = async ( id?: string ): Promise<ResultsDTO> => {
  const res = await axios.get( `${baseUrl}/people/${id}` );
  return res.data;
};

export const getPlanets = async ( page?: string ): Promise<ResultsDTO> => {
  let res;
  res = await axios.get( `${baseUrl}/planets${page ? '/?page=' + page : '/'}` );
  console.log( res );
  const newResults = getKeysFromArr( res.data.results, properties.planets );

  res = {
    ...res,
    data : {
      ...res.data,
      results : newResults
    }
  };

  return res.data;
};
export const getPlanet = async ( id?: string ): Promise<ResultsDTO> => {
  const res = await axios.get( `${baseUrl}/planets/${id}` );

  return res.data;
};
