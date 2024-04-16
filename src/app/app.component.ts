import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarListService} from "./car-list-service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FinalExam-mcowans';
}
