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
  private url = 'http://18.211.206.82/api/';

  constructor(private http: HttpClient) {
  }

  getStory(): Observable<Story> {
    return this.http.get<Story>(this.url + 'story')
      .pipe(
        tap(data => console.log('Single: ' + JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  addWord(word: string): void {
    this.http.post(this.url + 'add', word)
      .subscribe(resp => {
        console.log("response %o, ", resp);
      });
  }

  vote(vote: Vote): void {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let object: string = JSON.stringify(vote);

    this.http.post(this.url + 'vote', object, options)
      .subscribe(resp => {
        console.log("response %o, ", resp);
      });
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err);
  }
}
