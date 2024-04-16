import { Routes } from '@angular/router';
import {CarListComponent} from "./car-list/car-list.component";
import {CarDetailsComponentComponent} from "./car-list/car-details-component/car-details-component.component";


export const routes: Routes = [
  {path:'car-list', component:CarListComponent},
  {path:'car/:carID',component:CarDetailsComponentComponent}
];
