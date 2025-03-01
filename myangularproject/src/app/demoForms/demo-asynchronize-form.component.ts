import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo-asynchronize-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './demo-asynchronize-form.component.html',
  styleUrls: ['./demo-asynchronize-form.component.css']
})
export class DemoAsynchronizeFormComponent {
  contact: Contact;

  constructor() {
    this.contact = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      dob: "",
      address: "",
      terms: false
    };
  }

  onSubmit(custForm: NgForm) {
    console.log('Form Data:', custForm.value);
  }
}

export class Contact {
  firstName!: string;
  lastName!: string;
  age!: string;
  email!: string;
  dob!: string;
  address!: string;
  terms!: boolean;
}
