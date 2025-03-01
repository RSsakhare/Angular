import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  imports: [CommonModule],
  templateUrl: './ifdemo.component.html',
  styleUrl: './ifdemo.component.css'
})
export class IfdemoComponent {
status:boolean;
flag=false;
message1:string;
message2:string;
constructor()
{
  this.status=true;
  this.message1='Welcome to Angular Workshop';
  this.message2='Welcome to ReactJs workshop';
}
}
