import { Routes } from '@angular/router';
import { MainComponent } from './mainPage/mainPage.component';
import { ImpressumComponent } from './mainPage/impressum/impressum.component';


export const routes: Routes = [
    {path:'', component: MainComponent},
    { path: 'impressum', component: ImpressumComponent },
    { path: '**', redirectTo: '' } // Für ungültige Routen
];
