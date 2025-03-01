import { Component } from '@angular/core';

interface Employee {
  employeeCode: string;
  employeeName: string;
  gender: string;
  company: string;
}

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  employee: Employee = {
    employeeCode: '1',
    employeeName: 'Jonathan Parker',
    gender: 'Male',
    company: 'Contoso Public Ltd'
  };
}
