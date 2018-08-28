import {Component, OnInit} from '@angular/core';
import {faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons/faAngleDoubleUp";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  qrPath = 'assets/images/lnd-testnet.png';
  faAngleDoubleUp: any = faAngleDoubleUp;
  faAngleDoubleDown: any = faAngleDoubleDown;

  constructor() {
  }

  ngOnInit() {
  }

}
