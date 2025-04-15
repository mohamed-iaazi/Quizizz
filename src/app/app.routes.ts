import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { QuizComponent } from './quiz/quiz.component';
import { HistoriqueComponent } from './historique/historique.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
 {
    path: '',
    component : AccueilComponent 
 },
 {
    path: 'Quiz',
    component : QuizComponent
 },
 
 {
    path: 'Historique',
    component: HistoriqueComponent
 } , 
 {
   path :'Settings',
   component : SettingsComponent
 }
];
