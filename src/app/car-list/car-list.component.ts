import { Component } from '@angular/core';
import {Router,RouterLink,RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import {CarModel} from "../car-model";


@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgForOf],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {

  constructor(private router: Router) {
  }


  carList:CarModel[] = [new CarModel('Camry','Red','4 Cylinder Engine'),
    new CarModel('Highlander','Yellow','3.5 Litre')];


}
