import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true, // Assuming you're using standalone components
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'], // ✅ Correct key name
})
export class AccueilComponent implements OnInit {


  constructor (private router: Router) { }




  difficulty: string = "";
  category: string = "";
  username: string = "";
  qustions : any[] = [];


  get url(): string {
    return `https://opentdb.com/api.php?amount=10&category=${this.category}&type=multiple&difficulty=${this.difficulty}`;
  }

  ngOnInit(): void {

    if(localStorage.getItem('username')) {
      const username = localStorage.getItem('username');
      console.log("username", username);
      this.username = username || ""; // Use an empty string if null
    }



    const input =document.querySelectorAll('input').forEach((input) => {
      input.addEventListener('click', (e) => {
      
        const level = input.getAttribute('data-level');
        if (!level) {
          console.error("Missing data-id on item:", input);
          return; // Or handle however makes sense
        }
        this.difficulty = level;
      

     
      
      
      })

      document.getElementById("next-btn")?.addEventListener('click', () => {
        console.log("clicked next button");

     document.querySelector('.level')?.classList.add("d-none");

     if(this.username)

     {
      this.getdata(this.url); // Update with the new category
// Pass the questions array as a route parameter
     }
else {
      document.querySelector('.player-username')?.classList.remove("d-none");
      document.querySelector('.player-username')?.classList.add("d-block");
}

        });
      
       });


       document.querySelector('.play-btn')?.addEventListener('click', () => {
        console.log("clicked play button");
    
        // Check if the input element exists and cast it to HTMLInputElement
        const usernameInput = document.querySelector('.username-input') as HTMLInputElement | null;
    
        if (usernameInput) {
            // Now we are sure it is an HTMLInputElement, we can safely access its value
            const username = usernameInput.value;
            console.log("username", username);
            this.username = username;
            localStorage.setItem('username', username); // Store the username in local storage
        } else {
            console.error('Username input element not found.');
        }
    });
    


    const home=document.querySelector('.home');
    const level=document.querySelector('.level');


    const itemes = document.querySelectorAll('.item');
    itemes.forEach((item) => {
      item.addEventListener('click', () => {
        console.log("clicked item");
        item.classList.toggle('clicked');
    
        const category = item.getAttribute('data-id');
        if (!category) {
          console.error("Missing data-id on item:", item);
          return; // Or handle however makes sense
        }
        this.category = category;

        home?.classList.add("d-none");
        level?.classList.add("d-block");
        level?.classList.remove("d-none");
      


   

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
      this.qustions.push(...data.results); // Add the fetched questions to the qustions array
      console.log("Fetched Questions List:");
      

      this.qustions.forEach((question: any, index: number) => {
        console.log(`question ${index + 1} ${question.question}`);
        console.log(`answer : ${question.correct_answer}`);
        console.log(`incorrect_answers 1  ${question.incorrect_answers[0]}`);
        console.log(` incorrect_answers 2 ${question.incorrect_answers[1]}`);
        console.log(`incorrect_answers 3 ${question.incorrect_answers[2]}`);


      });

      this.router.navigate(['/Quiz', this.qustions]); 

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
