import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Story} from "../../models/story";

@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html'
})
export class StoryDisplayComponent implements OnInit, OnChanges {
  header: string = "Satoshi's Story";
  paragraph: string;
  @Input() phrase: string;
  @Input() story: Story;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.paragraph = this.story && this.story.phrases && this.story.phrases.length
      ? this.story.phrases.join(' ') : '[Start a new story]';
  }

}
