import {Component, OnInit} from '@angular/core';
import {Story} from "../models/story";
import {StoryService} from "../services/story.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: Story[];

  constructor(private storyService: StoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.storyService.getStories().subscribe(stories => this.stories = stories);
  }

  preview(story: Story): string {
    let fullStory = '';

    if (story && story.phrases && story.phrases.length) {
      story.phrases.forEach(a => fullStory += a.phrase + ' ');

      if (fullStory.length > 0) {
        fullStory = fullStory.substring(0, fullStory.length - 1);
      }
    } else {
      fullStory = '[Add a new candidate to begin this story]';
    }

    if (fullStory.length > 100) {
      return fullStory.substring(0, 100) + '...';
    }
    return fullStory;
  }

  onStoryCreated(story: Story) {
    this.router.navigate(['../story', story.id]);
  }
}
