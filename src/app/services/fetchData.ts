import { from } from 'rxjs';

var difficulty: string = "easy";
var category: string = "25";



const fetchData = () => {
    return from(fetch('https://opentdb.com/api.php?amount=10&category='+category+'&type=multiple &difficulty='+difficulty));
  };
  
  fetchData().subscribe(response => {
    console.log(response);
  });