import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Story} from '../../models/story';

@Component({
  selector: 'app-story-display',
  templateUrl: './story-display.component.html'
})
export class StoryDisplayComponent implements OnInit, OnChanges {
  paragraph: string;
  @Input() phrase: string;
  @Input() story: Story;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let fullPhrase = '';

    if (this.story && this.story.phrases && this.story.phrases.length) {
      this.story.phrases.forEach(a => fullPhrase += a.phrase + ' ');

      if (fullPhrase.length > 0) {
        fullPhrase = fullPhrase.substring(0, fullPhrase.length - 1);
      }
    } else {
      fullPhrase = '[Add a new candidate to begin this story]';
    }

    this.paragraph = fullPhrase;
  }
}
