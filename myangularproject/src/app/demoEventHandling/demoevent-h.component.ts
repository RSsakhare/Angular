import { Component } from '@angular/core';

@Component({
  selector: 'app-demoevent-h',
  imports: [],
  templateUrl: './demoevent-h.component.html',
  styleUrl: './demoevent-h.component.css'
})
export class DemoeventHComponent {
message:string="Angular FrameWork";
changeMessage(){
  this.message += " Welcome Again... "
}
}
