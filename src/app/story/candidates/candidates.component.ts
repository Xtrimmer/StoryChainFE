import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons/faAngleDoubleUp";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";
import {Candidate} from "../../models/candidate";
import {Vote, VoteType} from "../../models/vote";

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html'
})
export class CandidatesComponent implements OnInit, OnChanges {
  candidatesTitle: string = "Vote on the next candidate";
  candidatesEmptyMessage: string = "There are no candidates yet! Add a new word or phrase below";
  faAngleDoubleUp: any = faAngleDoubleUp;
  faAngleDoubleDown: any = faAngleDoubleDown;
  @Input() candidates: Candidate[];
  vote: Vote;
  VoteType = VoteType;
  isVoting: boolean = false;
  @Output() clickEvent = new EventEmitter<Vote>();


  constructor() {
  }

  ngOnInit() {
  }

  chooseCantidate(s: string, t: VoteType,) {
    this.vote = new Vote(s, t);
    this.isVoting = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isVoting = false;
  }

  integer() {
    let int = Math.floor(this.vote.weight);
    this.vote.weight = int < 1 ? 1 : Math.floor(this.vote.weight)
  }

  submitVote() {
    this.clickEvent.emit(this.vote);
    this.isVoting = false;
  }
}
