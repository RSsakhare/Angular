import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <p>Lab4-Q7-8</p>
   <img src="favicon.ico" ><br>
     <b style="font-size:2em"> Angular Application Development</b>
    <header>
      <h1 style="color: blue;">XYZ Company Public Ltd</h1>
    </header>
  `,
  styles: [`
    header {
      background-color:rgba(241, 174, 196, 0.68); /* Example header background color */
      padding: 10px;
      
      
    }
  `]
})
export class HeaderComponent {

}