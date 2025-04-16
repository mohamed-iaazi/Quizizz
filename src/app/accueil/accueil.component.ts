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
  get url(): string {
    return `https://opentdb.com/api.php?amount=10&category=${this.category}&type=multiple&difficulty=${this.difficulty}`;
  }

  ngOnInit(): void {

    const home=document.querySelector('.home');
    const level=document.querySelector('.level');


    const itemes = document.querySelectorAll('.item');
    itemes.forEach((item) => {
      item.addEventListener('click', () => {
        console.log("clicked item");
        item.classList.toggle('clicked');
    
        const category = item.getAttribute('data-id') || "25"; 
        this.category = category;
        home?.classList.add("d-none");
        level?.classList.add("d-block");
        level?.classList.remove("d-none");
    
        this.getdata(this.url); // Update with the new category
      });
    });
    
  }

  async getdata(url: string): Promise<void> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Alas, an error hath occurred: ' + response.statusText);
      }

      const data = await response.json(); 
      console.log("Fetched Questions List:");
      
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
