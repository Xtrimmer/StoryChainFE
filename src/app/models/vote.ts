export class Vote {
  phrase: string;
  weight: number = 1;
  weightPolarity: number;

  constructor(phrase: string, weightPolarity: number) {
    this.phrase = phrase;
    this.weightPolarity = weightPolarity;
  }
}
