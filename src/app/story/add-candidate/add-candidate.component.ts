import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AddCandidateRequest} from "../../models/add-candidate-request";

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html'
})
export class AddCandidateComponent implements OnInit {
  phrase: string;
  cost: number = 0;
  @Output() phraseChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() buttonClicked: EventEmitter<AddCandidateRequest> = new EventEmitter<AddCandidateRequest>();

  constructor() {
  }

  ngOnInit() {
  }

  onType(): void {
    this.phraseChanged.emit(this.phrase);
    this.cost = this.fib(this.phrase.trim().length);
  }

  onClick(): void {
    if (this.phrase && this.phrase.length) {
      let request = new AddCandidateRequest(this.phrase, window.location.href)
      this.buttonClicked.emit(request);
      this.phrase = null;
      this.cost = 0;
    }
  }

  fib(n: number) {
    let f: number[] = [];
    let i: number;

    f[0] = 0;
    f[1] = 1 / 50;

    for (i = 2; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
    }

    return Math.ceil(f[n]);
  }

}
