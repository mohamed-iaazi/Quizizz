import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetquestionService } from '../services/getquestion.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  category: string = '';
  level: string = '';
  userName: string = '';     // ✅ Declare at top level
  question: any[] = [];      // ✅ Declare at top level

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
}
