import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  constructor(private router1:Router){}
  goContacts()
  {
    //programmatic navigation
    this.router1.navigate(["/contact"]);
  }

}
