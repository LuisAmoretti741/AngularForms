import { Routes } from '@angular/router';
import { FormsOne } from './components/forms-one/forms-one';
import { FormsTwo } from './components/forms-two/forms-two';

export const routes: Routes = [
    {path:"", redirectTo:"/form1", pathMatch:"full"},
    {path:"form1", component: FormsOne},
    {path:"form2", component:FormsTwo},
    {path:"**", redirectTo:"/form1", pathMatch:"full"}
];
