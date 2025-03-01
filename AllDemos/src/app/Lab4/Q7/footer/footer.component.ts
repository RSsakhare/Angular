import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>Copyrights &#64;XYZ Company Public Ltd</p>
      <p>New Jersey, East street, US</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #f0f0f0; /* Example footer background color */
      padding: 10px;
     
      position: fixed; /* Fixed at the bottom */
      left: 0;
      bottom: 0;
      width: 100%;
    }
  `]
})
export class FooterComponent {

}