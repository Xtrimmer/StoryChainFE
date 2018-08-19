import {Component} from '@angular/core';
import {StoryService} from "../../services/story.service";
import {AddStoryRequest} from "../../models/add-story-request";

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent {
  showForm = false;
  story: AddStoryRequest = new AddStoryRequest();

  constructor(private storyService: StoryService) {
    this.story.citation = "The syndicate of Satoshi's storytellers";
    this.story.period = 60;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    this.story.redirectUrl = window.location.href;
    this.storyService.addNewStory(this.story);
    this.showForm = false;
    this.story.period = 60;
    this.story.citation = "The syndicate of Satoshi's storytellers";
    this.story.title = null;
  }
}
