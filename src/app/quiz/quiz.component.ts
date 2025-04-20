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
      },
      error: (err: any) => {
        console.error('Failed to load questions:', err);
      }
    });
  }


  nextQestion(){

    if(this.count>=10){
      this.updateprogress();
      this.choiseselected=true;

    }

    else {

      this.count += 1;
      console.log(this.count)
     this.updateprogress();
    }

  }

  checkAnswer(selected:string) : void{
    this.selectedAnswer = selected;
    this.choiseselected=false;


  }


  updateprogress(){
    if(this.progress>=100){

      alert("you finish")
    }
    else{

 this.progress += 10;
    }
  }


  
}
