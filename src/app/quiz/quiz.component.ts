import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {


  constructor (private routerAtive: ActivatedRoute , private router : Router) {


   }
  userName: string = "";
  question : any[] =[];
  ngOnInit(): void {




    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      console.log(navigation.extras.state);
    } else {
      console.log('No navigation state available');
    }
      
 
   
  if(localStorage.getItem('userName')) {
      const username = localStorage.getItem('userName');
      this.userName = username || ""; // Use an empty string if null

      const arrayString = this.routerAtive.snapshot.paramMap.get('itemes'); // Get the route parameter
      if (arrayString) {
        this.question = JSON.parse(arrayString); // Convert the string back to an array
      }
      console.log(this.question); // Use the array

     
    }

    else {

      alert("Please enter your name first and select the Category ");

      this.router.navigate(['/']);

    }


  }

  

}
