import { ObjectKeys } from '../utils/utils';

interface PlanetRsDTO extends ObjectKeys{
  name: string;
  diameter: string;
  climate:string;
  gravity: string;
  population: string;
  url: string;
}

export default PlanetRsDTO;
