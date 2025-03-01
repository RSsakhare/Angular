import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [RouterLink,RouterOutlet,RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
title:string;
constructor(){
  this.title="WorkShop";
}
}
