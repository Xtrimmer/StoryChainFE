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
  paragraph: string = "";

  constructor(private stompService: StompService,
              private storyService: StoryService) {
  }

  ngOnInit() {
    this.storyService.getStory().subscribe((story) => {
      this.update(story);

      // Open connection with server socket
      let subscription = this.stompService.subscribe('/topic/story/' + this.story.id);

      subscription.subscribe((message: Message) => {
        this.update(JSON.parse(message.body));
        console.log(message.body);
      });

    });
  }

  onAddition(phrase: string): void {
    this.storyAddition = phrase;
  }

  onAddWord(word: string): void {
    this.storyService.addWord(word);
    this.storyAddition = null;
  }

  onVote(vote: Vote): void {
    this.storyService.vote(vote);
  }

  private update(story) {
    this.story = story;
    this.paragraph = this.story.words.join(' ');
  }
}
