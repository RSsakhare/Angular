import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from './Book';
import { MypipedemoPipe } from './mypipedemo.pipe';

@Component({
  selector: 'app-testpipe',
  imports: [CommonModule,MypipedemoPipe],
  templateUrl: './testpipe.component.html',
  styleUrl: './testpipe.component.css'
})
export class TestpipeComponent {
  message:string="DEMO PIPE"
  today=new Date();
  book =new Book("Fire",500,"xyz");
  sports = ["Cricket", "Golf", "Rugby", "Chess", "FotBall", "BasketBall", "Tennis", 
    "Boxing"] 
}
