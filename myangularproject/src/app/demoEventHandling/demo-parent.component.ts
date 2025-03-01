import { Component } from '@angular/core';
import { DemoChildComponent } from './demo-child.component';

@Component({
  selector: 'app-demo-parent',
  imports: [DemoChildComponent],
  templateUrl: './demo-parent.component.html',
  styleUrl: './demo-parent.component.css'
})
export class DemoParentComponent {
msg:string="";
onNotifyofparent(message:string):void{
  this.msg="I am actually.... "+message;
}
}
