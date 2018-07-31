import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Story} from "../models/story";
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs/internal/observable/throwError";
import {Vote} from "../models/vote";

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getStory(id: string): Observable<Story> {
    return this.http.get<Story>(this.url + 'story/' + id)
      .pipe(
        tap(data => console.log('Single: ' + JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.url + 'stories')
      .pipe(
        tap(data => console.log('Single: ' + JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  addPhrase(storyId: string, phrase: string): void {
    this.http.post(this.url + 'add/' + storyId, phrase)
      .subscribe(resp => {
        console.log("response %o, ", resp);
      });
  }

  vote(storyId: string, vote: Vote): void {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let object: string = JSON.stringify(vote);

    this.http.post(this.url + 'vote/' + storyId, object, options)
      .subscribe(resp => {
        console.log("response %o, ", resp);
      });
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err);
  }
}
