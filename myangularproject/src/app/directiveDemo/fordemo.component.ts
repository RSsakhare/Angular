import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  imports: [CommonModule],
  templateUrl: './fordemo.component.html',
  styleUrl: './fordemo.component.css'
})
export class FordemoComponent {
langauge:string[]=["Python","Java","SQL","JavaScript","HTML","Angular"];

employees: any[]=[]; 
flag:boolean=false; 
 
constructor() { 
this.flag=true; 

this.employees = [ 
{ 
code: 'emp101', name: 'Tom', gender: 'Male', 
annualSalary: 5500, dateOfBirth: '25/6/1988' 
}, 
{ 
code: 'emp102', name: 'Alex', gender: 'Male', 
annualSalary: 5700.95, dateOfBirth: '9/6/1982' 
}, 
{ 
code: 'emp103', name: 'Mike', gender: 'Male', 
annualSalary: 5900, dateOfBirth: '12/8/1979' 
}, 
{ 
code: 'emp104', name: 'Mary', gender: 'Female', 
annualSalary: 6500.826, dateOfBirth: '14/10/1980' 
} 
]; 
} 

}
