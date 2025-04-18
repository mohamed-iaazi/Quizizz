import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetquestionService } from '../services/getquestion.service';

@Component({
  selector: 'app-accueil',
  standalone: true, // Assuming you're using standalone components
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'], // ✅ Correct key name
})
export class AccueilComponent  {
 Questions : any;

  constructor(private QuestionService : GetquestionService){
    this.Questions = this.QuestionService.getQuestion('25','easy')
    this.Questions.subscribe((x : any) => console.log('qus')+ x)
    
  }


 
}
