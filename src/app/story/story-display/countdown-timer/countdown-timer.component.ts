import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html'
})
export class CountdownTimerComponent implements OnInit {
  @Input() timeRemaining: number;
  count: string = "0s";

  constructor() {
  }

  ngOnInit() {
    this.initiateCountDown();
  }

  initiateCountDown() {
    setInterval(() => {

      if (this.timeRemaining > 0) {
        let days: number = Math.floor(this.timeRemaining / (1000 * 60 * 60 * 24));
        let hours: number = Math.floor((this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes: number = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds: number = Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
        this.timeRemaining -= 1000;

        this.count = (days > 0 ? days + "d " : "")
          + (hours > 0 ? hours + "h " : "")
          + (minutes > 0 ? minutes + "m " : "")
          + seconds + "s ";
      }
    }, 1000);
  }
}
