import axios from 'axios';

const baseUrl = 'https://swapi.dev/api/';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getData = async ( params: string ) :Promise<any> => {
  const res = await axios.get( `${baseUrl}${params}` );
  return res.data;
};
