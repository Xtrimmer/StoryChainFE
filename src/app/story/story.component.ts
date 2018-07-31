import {Component, OnDestroy, OnInit} from '@angular/core';
import {Story} from "../models/story";
import {StompService} from "@stomp/ng2-stompjs";
import {Message} from '@stomp/stompjs';
import {StoryService} from "../services/story.service";
import {Vote} from "../models/vote";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html'
})
export class StoryComponent implements OnInit, OnDestroy {
  storyAddition: string;
  story: Story;
  private webSocketSubscription: Subscription;

  constructor(private stompService: StompService,
              private storyService: StoryService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let storyId = this.route.snapshot.paramMap.get('id');
    this.storyService.getStory(storyId).subscribe((story) => {
      this.story = story;

      // Open connection with server socket
      let webSocketObservable = this.stompService.subscribe('/topic/story/' + this.story.id);

      this.webSocketSubscription = webSocketObservable.subscribe((message: Message) => {
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

  ngOnDestroy(): void {
    this.webSocketSubscription.unsubscribe();
  }
}
