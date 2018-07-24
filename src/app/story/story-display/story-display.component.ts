import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html'
})
export class StoryDisplayComponent implements OnInit {
  storyTitle: string = "Satoshi's Story";
  storyDescription: string = "A Test of Crowd Sourced Storytelling...";
  storyFooter: string = "The syndicate of Satoshi's storytellers";
  @Input() phrase: string;
  @Input() story: string;
  @Input() updateTime: string;

  constructor() {
  }

  ngOnInit() {
  }

}
