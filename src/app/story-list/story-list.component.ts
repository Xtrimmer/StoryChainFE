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
    return story.phrases.join(" ").slice(0, 100) + '...';
  }

  onStoryCreated(story: Story) {
    this.router.navigate(['../story', story.id]);
  }
}
