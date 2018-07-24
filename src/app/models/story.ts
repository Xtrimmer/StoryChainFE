import {Candidate} from "./candidate";

export interface Story {
  words: string[];
  candidates: Candidate[];
  period: number;
  updateTime: string;
}
