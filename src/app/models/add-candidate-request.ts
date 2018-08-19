export class AddCandidateRequest {

  phrase: string;
  redirectUrl: string;
  storyId: string;

  constructor(phrase: string, redirectUrl: string) {
    this.phrase = phrase;
    this.redirectUrl = redirectUrl;
  }
}
