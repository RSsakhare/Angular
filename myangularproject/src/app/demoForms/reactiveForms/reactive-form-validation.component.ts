import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css'
})
export class ReactiveFormValidationComponent {
myForm:FormGroup = new FormGroup({
  "UserName":new FormControl('ABC',Validators.required),
  "UserAge":new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
  "PhoneNumber":new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')])
});
get UserName():any{return this.myForm.get('UserName')}
get UserAge():any{return this.myForm.get('UserAge')}
get PhoneNumber():any{return this.myForm.get('PhoneNumber')}

onSubmit(){
  console.log("data tranfered....");
  console.log(this.myForm.value);
  }

}
