import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoryComponent} from './story/story.component';
import {CandidatesComponent} from './story/candidates/candidates.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AddCandidateComponent} from './story/add-candidate/add-candidate.component';
import {StoryDisplayComponent} from './story/story-display/story-display.component';
import {FormsModule} from "@angular/forms";
import {StompConfig, StompService} from "@stomp/ng2-stompjs";
import {stompConfig} from "./config/stompConfig";
import {StoryService} from "./services/story.service";
import {HttpClientModule} from "@angular/common/http";
import {CountdownTimerComponent} from './story/story-display/countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    CandidatesComponent,
    AddCandidateComponent,
    StoryDisplayComponent,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StoryService,
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
