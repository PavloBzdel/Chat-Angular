
import { CreateResponse } from './../interfaces/create-response';
import { People } from './../interfaces/people';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  static url =
    'https://angular-organizer-calend-de819-default-rtdb.europe-west1.firebasedatabase.app/messages';
  constructor(private http: HttpClient) {}

  load(date: moment.Moment): Observable<People[]> {
    return this.http
      .get<People[]>(`${MessagesService.url}/${date.format('DD-MM-YYYY')}.json`)
      .pipe(
        map((tasks) => {
          if (!tasks) {
            return [];
          }
          return Object.keys(tasks).map((key: any) => ({ ...tasks[key], id: key }));
        })
      );
  }

  create(task: People): Observable<People> {
    return this.http
      .post<CreateResponse>(`${MessagesService.url}/${task.data}.json`, task)
      .pipe(
        map((res) => {
          return { ...task, id: res.name };
        })
      );
  }
  remove(task: People): Observable<void>{
    return this.http.delete<void>(`${MessagesService.url}/${task.data}/${task.id}.json`)
  }
}

