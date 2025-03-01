import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeDetailsComponent } from './Lab4/Q6/employee-details.component';
import { CompanyExComponent } from './Lab4/Q7/company-ex.component';
import { ParentComponent } from './Lab4/Q9/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployeeDetailsComponent,CompanyExComponent,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AllDemos';
}
