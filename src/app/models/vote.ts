export class Vote {
  phrase: string;
  weight = 1;
  voteType: VoteType;
  redirectUrl: string;
  storyId: string;

  constructor(phrase: string, weightPolarity: number) {
    this.phrase = phrase;
    this.voteType = weightPolarity;
  }
}

export enum VoteType {
  UPVOTE = 0,
  DOWNVOTE = 1,
}
