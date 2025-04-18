import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetquestionService {
 
  List : any;

  constructor() { }

  getQuestion(category: string, difficulty: string) : []  {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;


    //  const list : any=  from(fetch(url).then(  response =>response.json() ) );

    //  list.subscribe( (x : any)=> console.log(x))



    const data$ = Observable.create((observer : any) => {
      fetch(url)
        .then(response => response.json()) // or text() or blob() etc.
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
    
    data$.subscribe((data: any) => console.log(data));
  
    return data$;

  }
}
