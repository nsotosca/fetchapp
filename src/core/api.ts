import axios from 'axios';

const baseURL = 'https://swapi.dev/api/';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getData = async ( params: string ) :Promise<any> => {
  const res = await axios.get( `${baseURL}${params}` );
  return res.data;
};

