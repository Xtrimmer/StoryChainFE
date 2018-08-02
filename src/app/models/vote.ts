export class Vote {
  phrase: string;
  weight: number = 1;
  voteType: VoteType;

  constructor(phrase: string, weightPolarity: number) {
    this.phrase = phrase;
    this.voteType = weightPolarity;
  }
}

export enum VoteType {
  UPVOTE = 0,
  DOWNVOTE = 1,
}
