import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true, // Assuming you're using standalone components
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'], // ✅ Correct key name
})
export class AccueilComponent implements OnInit {

  categorySelected : boolean = true;
  levelSelected : boolean = true ;
  userNameSelected : boolean = false ;
  inputSelected: boolean = false;

  selectedlevel: string ='';
  selectedCategory: Number =0;

  userName: string =localStorage.getItem('userName') || "";
  score: Number = Number(localStorage.getItem('score')) || 0;


  router : Router;

constructor(router : Router){
  this.router=router;

}
  ngOnInit(): void {

    if(localStorage.getItem("userName")){
       
      this.userNameSelected=true;
      this.categorySelected=false;

    }


  }
  
  


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
      name: 'medium',
 
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
    this.selectedCategory=id
  }

  selectlevel(level : string){
    console.log("level is "+level)
    this.categorySelected=true;
    this.levelSelected=true;

  }

  select(level : string){

    const d =document.querySelector("."+level) as HTMLElement | null ;
    document.querySelectorAll(".choice")?.forEach(element => {
      element.classList.remove("selected");


      
    });


        d?.classList.add('selected')

        this.selectedlevel=level;
        console.log(this.selectedlevel)

  }

  startQuiz(){
    this.levelSelected=true;
  this.router.navigate(["/Quiz",this.selectedCategory,""+this.selectedlevel] );
  }

  saveUserName(){
    this.userNameSelected=true;
    this.categorySelected=false;
    console.log(this.userName)
    localStorage.setItem("userName",this.userName)
  }


}
