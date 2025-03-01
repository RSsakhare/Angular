import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  template: `
    <div class="body-content">
      <p style="color: orange;">Nested Components Sample</p>
      <p style="color: orange;">Components can be nested-One component can be rendered inside another</p>
    </div>
  `,
  styles: [`
    .body-content {
      background-color: lightyellow;
      padding: 20px;
      
    }
  `]
})
export class BodyComponent {

}