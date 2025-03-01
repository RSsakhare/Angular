import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-data-binding',
  imports: [CommonModule,FormsModule],
  templateUrl: './demo-data-binding.component.html',
  styleUrl: './demo-data-binding.component.css'
})
export class DemoDataBindingComponent {
website={
  name:"SP Technologies",
  url:"http://angular.io",
  logo:"favicon.ico",
  description:"this is angular logo"
};
tech:string="Angular WorkShop"
}
