import {Component, OnDestroy, OnInit} from '@angular/core';
import {Story} from "../models/story";
import {StompService} from "@stomp/ng2-stompjs";
import {Message} from '@stomp/stompjs';
import {StoryService} from "../services/story.service";
import {Vote} from "../models/vote";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AddCandidateRequest} from "../models/add-candidate-request";

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
    let storyId = this.route.snapshot.paramMap.get('storyId');
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

  onAddPhrase(request: AddCandidateRequest): void {
    request.storyId = this.story.id;
    this.storyService.addPhrase(request);
    this.storyAddition = null;
  }

  onVote(vote: Vote): void {
    vote.storyId = this.story.id;
    this.storyService.vote(vote);
  }

  ngOnDestroy(): void {
    this.webSocketSubscription.unsubscribe();
  }
}
