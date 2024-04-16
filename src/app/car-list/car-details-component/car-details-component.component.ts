import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarModel} from "../../car-model";

@Component({
  selector: 'app-car-details-component',
  standalone: true,
  imports: [],
  templateUrl: './car-details-component.component.html',
  styleUrl: './car-details-component.component.css'
})
export class CarDetailsComponentComponent implements OnInit{

  car:{}
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {

  }


}
