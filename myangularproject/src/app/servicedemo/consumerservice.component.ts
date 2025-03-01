import { Component } from '@angular/core';
import { StudentserviceService } from './studentservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-consumerservice',
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './consumerservice.component.html',
  styleUrl: './consumerservice.component.css'
})
export class ConsumerserviceComponent {
result:any;
constructor(private studserv:StudentserviceService){
  this.result=this.studserv.getList();
}
}
