import { ObjectKeys } from '../utils/utils';

interface CharacterRsDTO extends ObjectKeys{
  name: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  url: string;
}

export default CharacterRsDTO;