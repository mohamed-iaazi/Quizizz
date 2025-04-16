import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true, // Assuming you're using standalone components
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'], // ✅ Correct key name
})
export class AccueilComponent implements OnInit {





  difficulty: string = "easy";
  category: string = "25";

  // ✅ Cleaner using a getter so it stays in sync with variables
  get url(): string {
    return `https://opentdb.com/api.php?amount=10&category=${this.category}&type=multiple&difficulty=${this.difficulty}`;
  }

  ngOnInit(): void {
    this.getdata(this.url);

    const itemes = document.querySelectorAll('.item');
    itemes.forEach((item) => {
      item.addEventListener('click', function () {
        itemes.forEach((el) => el.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }

  async getdata(url: string): Promise<void> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Alas, an error hath occurred: ' + response.statusText);
      }

      const data = await response.json(); // ✅ Parse JSON response
      console.log("Fetched Questions List:");
      
      // ✅ Loop and display each question
      data.results.forEach((question: any, index: number) => {
        console.log(`question ${index + 1} ${question.question}`);
        console.log(`answer : ${question.correct_answer}`);
        console.log(`incorrect_answers 1  ${question.incorrect_answers[0]}`);
        console.log(` incorrect_answers 2 ${question.incorrect_answers[1]}`);
        console.log(`incorrect_answers 3 ${question.incorrect_answers[2]}`);


      });

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
