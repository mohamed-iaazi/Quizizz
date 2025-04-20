import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetquestionService {
 


  constructor() { }


  getQuestion(category: string, difficulty: string): Observable<any> {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

    return new Observable((observer) => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          observer.next(data);    // data.results is the array of questions
          observer.complete();
          data.subscribe((e: any) => console.log(e));
        })
        .catch(err => observer.error(err));
    });

    
  }
}