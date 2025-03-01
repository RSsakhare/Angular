import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
contactForm = new FormGroup({
  firstname:new FormControl(),
  lastname:new FormControl(),
  email:new FormControl(),
  gender:new FormControl(),
  isMarried:new FormControl(),
  country:new FormControl()

});
onSubmit(){
  console.log(this.contactForm.value);
}
}
