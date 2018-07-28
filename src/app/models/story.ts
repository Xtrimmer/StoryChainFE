import {Candidate} from "./candidate";

export interface Story {
  id: string;
  phrases: string[];
  candidates: Candidate[];
  period: number;
  updateTime: string;
}
