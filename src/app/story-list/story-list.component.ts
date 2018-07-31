import {Component, OnInit} from '@angular/core';
import {Story} from "../models/story";
import {StoryService} from "../services/story.service";

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: Story[];

  constructor(private storyService: StoryService) {
  }

  ngOnInit() {
    this.storyService.getStories().subscribe(stories => this.stories = stories);
  }

  preview(story: Story): string {
    return story.phrases.join(" ").slice(0, 100) + '...';
  }

}
