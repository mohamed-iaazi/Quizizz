import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
updateuserName() {
  localStorage.setItem("userName",this.username);
  console?.log(this.username)


}
  username : string =""+localStorage.getItem("userName")?.toString();

}
