import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Story} from '../models/story';
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';
import {Vote} from '../models/vote';
import {AddCandidateRequest} from "../models/add-candidate-request";
import {AddStoryRequest} from "../models/add-story-request";
import {InvoiceUrl} from "../models/invoice-url";

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private url = 'https://be.satoshi-stories.com/api/';

  constructor(private http: HttpClient) {
  }

  getStory(id: string): Observable<Story> {
    return this.http.get<Story>(this.url + 'story/' + id)
      .pipe(
        tap(data => console.log('Single: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.url + 'stories')
      .pipe(
        tap(data => console.log('Single: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  addPhrase(request: AddCandidateRequest): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const object: string = JSON.stringify(request);
    this.http.post<InvoiceUrl>(this.url + 'add/candidate/', object, options)
      .subscribe(invoiceUrl => {
        document.location.href = invoiceUrl.url
      });
  }

  vote(vote: Vote): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const object: string = JSON.stringify(vote);

    this.http.post<InvoiceUrl>(this.url + 'vote/', object, options)
      .subscribe(invoiceUrl => {
        document.location.href = invoiceUrl.url
      });
  }

  addNewStory(request: AddStoryRequest): void {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let object: string = JSON.stringify(request);

    this.http.post<InvoiceUrl>(this.url + 'add/story/', object, options)
      .subscribe(invoiceUrl =>
        document.location.href = invoiceUrl.url
      );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err);
  }
}
