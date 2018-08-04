import {Component, EventEmitter, Output} from '@angular/core';
import {Story} from "../../models/story";
import {Candidate} from "../../models/candidate";
import {StoryService} from "../../services/story.service";

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent {
  showForm: boolean = false;
  @Output() formSubmitted: EventEmitter<Story> = new EventEmitter<Story>();
  story: Story = new class implements Story {
    candidates: Candidate[];
    citation: string = "The syndicate of Satoshi's storytellers";
    id: string;
    period: number = 60;
    phrases: string[];
    title: string;
    updateTime: string;
    totalValue: number;
  };

  constructor(private storyService: StoryService) {
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    this.storyService.addNewStory(this.story)
      .subscribe(story =>
        this.formSubmitted.emit(story)
      );
    this.showForm = false;
    this.story.period = 60;
    this.story.citation = "The syndicate of Satoshi's storytellers";
    this.story.title = null;
  }
}
