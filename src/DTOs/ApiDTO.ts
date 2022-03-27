import CharacterRsDTO from './CharacterDTO';
import PlanetRsDTO from './PlanetDTO';

export type ResultDTO = CharacterRsDTO | PlanetRsDTO;

interface ResultsDTO {
  count: number;
  next: string | null;
  previous: string | null,
  results: ResultDTO[];
}

export default ResultsDTO;