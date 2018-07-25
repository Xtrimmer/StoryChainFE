import {Candidate} from "./candidate";

export interface Story {
  id: string;
  words: string[];
  candidates: Candidate[];
  period: number;
  updateTime: string;
}
