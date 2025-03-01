import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  message:string;
  technology:string;
  constructor()
  {
    this.message="Welcome to My First Component";
    this.technology="Angular"
  }
}
