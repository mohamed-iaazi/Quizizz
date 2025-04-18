import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuestionComponent } from './test/test.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent,QuestionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Quizizz';
}
