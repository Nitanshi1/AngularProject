import { Routes } from '@angular/router';
import { PlaceComponent } from './place/place.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

export const routes: Routes = [
       {path:"places",component:PlaceComponent},
       {path:"dashboard",component:DashboardComponent},
       {path:"",redirectTo:"/dashboard",pathMatch:'full'},
       {path:"detail/:SerialNo",component:PlaceDetailsComponent}
];