import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  imports: [],
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent {
sum=0;
constructor()
{
  this.sum=this.add(5,5);
}
add(a:number,b:number){
  return a+b;
}
}
