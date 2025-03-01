import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-company-ex',
  imports: [HeaderComponent,BodyComponent,FooterComponent],
  templateUrl: './company-ex.component.html',
  styleUrl: './company-ex.component.css'
})
export class CompanyExComponent {

}
