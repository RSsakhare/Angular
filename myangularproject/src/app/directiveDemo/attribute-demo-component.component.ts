import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-demo-component',
  imports: [CommonModule],
  templateUrl: './attribute-demo-component.component.html',
  styleUrl: './attribute-demo-component.component.css'
})
export class AttributeDemoComponentComponent {
svar:string="style using ngstyle";
color:string;
size:string;
constructor(){
  this.color="Pink";
  this.size="18px";
}
}
