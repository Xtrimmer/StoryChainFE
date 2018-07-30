import {Component, OnInit} from '@angular/core';
import {Story} from "../models/story";
import {StompService} from "@stomp/ng2-stompjs";
import {Message} from '@stomp/stompjs';
import {StoryService} from "../services/story.service";
import {Vote} from "../models/vote";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html'
})
export class StoryComponent implements OnInit {
  storyAddition: string;
  story: Story;

  constructor(private stompService: StompService,
              private storyService: StoryService) {
  }

  ngOnInit() {
    this.storyService.getStory().subscribe((story) => {
      this.story = story;

      // Open connection with server socket
      let subscription = this.stompService.subscribe('/topic/story/' + this.story.id);

      subscription.subscribe((message: Message) => {
        this.story = JSON.parse(message.body);
        console.log(message.body);
      });

    });
  }

  onAddition(phrase: string): void {
    this.storyAddition = phrase;
  }

  onAddPhrase(phrase: string): void {
    this.storyService.addPhrase(this.story.id, phrase);
    this.storyAddition = null;
  }

  onVote(vote: Vote): void {
    this.storyService.vote(this.story.id, vote);
  }
}
