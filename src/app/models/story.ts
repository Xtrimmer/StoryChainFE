import {Candidate} from './candidate';
import {Phrase} from './phrase';

export class Story {
  id: string;
  title: string;
  phrases: Phrase[];
  candidates: Candidate[];
  citation: string;
  period: number;
  timeRemaining: number;
  totalValue: number;
}
