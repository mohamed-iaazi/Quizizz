import { Component } from '@angular/core';
import { AccueilComponent } from '../accueil/accueil.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [AccueilComponent,RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {



}
