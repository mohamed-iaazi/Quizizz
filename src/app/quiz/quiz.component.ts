import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetquestionService } from '../services/getquestion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports : [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  category: string = '';
  level: string = '';
  userName: string = '';
  question: any[] = [];
  count: number = 1;
  progress: number =0;
  selectedAnswer : string ="";
  choiseselected :boolean = true;
  gemeOver : boolean = false;
  score: number=0;
  totalScore : number = Number(localStorage.getItem("score"));
  shuffledAnswers: string[] = [];

  historique: any[]= [];


  constructor(
    private routerAtive: ActivatedRoute,
    private router: Router,
    private getQestionService: GetquestionService
  ) {}

  ngOnInit(): void {
    this.category = this.routerAtive.snapshot.paramMap.get('category') + '';
    this.level = this.routerAtive.snapshot.paramMap.get('level') + '';

    const username = localStorage.getItem('userName');
    if (username) {
      this.userName = username || '';
      this.GetquestionService();
    } else {
      alert('Please enter your name first and select the Category ');
      this.router.navigate(['/']);
    }
  }

  GetquestionService() {
    this.getQestionService.getQuestion(this.category, this.level).subscribe({
      next: (data: any) => {
        console.log('API data:', data);
        this.question = data.results || [];
       this.shuffleAnswers(this.question[this.count - 1]);

      },
      error: (err: any) => {
        console.error('Failed to load questions:', err);
      }
    });
  }


  nextQestion(){

    if(this.count==10){
      this.updateprogress();
      this.choiseselected=true;

    }

    else {

      this.count += 1;
      console.log(this.count)
     this.updateprogress();
     this.shuffleAnswers(this.question[this.count - 1]);

    }

  }

  checkAnswer(selected:string) : void{
    this.selectedAnswer = selected;
    this.choiseselected=false;

    if(selected===this.question[this.count-1].correct_answer){
      this.score+=5;
    }


  }


  updateprogress(){
    if(this.progress==90){

      this.gemeOver=true;
      this.displaResult();
    }
    else{

 this.progress += 10;
    }
  }
  displaResult() {

    localStorage.setItem("score",(this.score+this.totalScore).toString());
    this.score=this.score;
    const date = new Date().toISOString();
    const dte = date.split("T")[0];

    const list = { date: dte, score: this.score };

    const saved = localStorage.getItem("historique");
    const history = saved ? JSON.parse(saved) : [];

    history.push(list);

    localStorage.setItem("historique", JSON.stringify(history));

    this.historique = history;

//

  }
  shuffleAnswers(question: any) {
    const answers = [...question.incorrect_answers, question.correct_answer];
    this.shuffledAnswers = answers.sort(() => Math.random() - 0.5);
  }




}
