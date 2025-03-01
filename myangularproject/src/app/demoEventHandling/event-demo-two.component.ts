import { Component } from '@angular/core';

@Component({
  selector: 'app-event-demo-two',
  imports: [],
  templateUrl: './event-demo-two.component.html',
  styleUrl: './event-demo-two.component.css'
})
export class EventDemoTwoComponent {
result="";
x="";
constructor(){}
//for template reference demo
displayDetails(pName:string,lNamed:string){
  this.x="Your Details are "+pName+" "+lNamed+"!!!";
}
}
