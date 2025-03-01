import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo-child',
  imports: [],
  templateUrl: './demo-child.component.html',
  styleUrl: './demo-child.component.css'
})
export class DemoChildComponent {
@Output() notify:EventEmitter<string>=new EventEmitter<string>();
onClick():void{
this.notify.emit("I am fired from child component");
}
}
