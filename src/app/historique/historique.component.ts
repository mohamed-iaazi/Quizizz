import { Component } from '@angular/core';

@Component({
  selector: 'app-historique',
  imports: [],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {


 saved : any = localStorage.getItem("historique");
 history : any = this.saved ? JSON.parse(this.saved) : [];

}
