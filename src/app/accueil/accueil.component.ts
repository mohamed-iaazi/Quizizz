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
export class AccueilComponent {

  categorySelected : boolean = false;
  levelSelected : boolean = true ;
  selectedlavel: string ='';
  userNameSelected : boolean = true ;
  


  Category = [

    {
      id: 25,
      name: 'Geography',
      imageSrc: 'images/map.png',
    },

    {
      id: 22,
      name: 'Sport',
      imageSrc: 'images/sport-equipment-concept.png',
    }

    ,

    {
      id: 30,
      name: 'Chemistry',
      imageSrc: 'images/chemistry.png',
    }


    ,

    {
      id: 19,
      name: 'Math',
      imageSrc: 'images/calculator.png',
    }



  ];


  Level = [

    {
      id: 1,
      name: 'easy',
  
    },

    {
      id: 2,
      name: 'meduim',
 
    }

    ,

    {
      id: 3,
      name: 'hard',

    }

  ];




  Selected(id: Number){
    console.log("id category is "+id)
    this.categorySelected=true;
    this.levelSelected=false;
  }

  selectlevel(lavel : string){
    console.log("level is "+lavel)
    this.categorySelected=true;
    this.levelSelected=true;

  }

  select(level : string){

    const d =document.querySelector("."+level) as HTMLElement | null ;
    document.querySelectorAll(".choice")?.forEach(element => {
      element.classList.remove("selected");


      
    });


        d?.classList.add('selected')

  }


}
