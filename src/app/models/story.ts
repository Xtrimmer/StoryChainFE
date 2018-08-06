import {Candidate} from './candidate';

export class Story {
  id: string;
  title: string;
  phrases: string[];
  candidates: Candidate[];
  citation: string;
  period: number;
  updateTime: string;
  totalValue: number;
}
