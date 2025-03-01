import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo-myform',
  imports: [FormsModule,CommonModule],
  templateUrl: './demo-myform.component.html',
  styleUrl: './demo-myform.component.css'
})
export class DemoMyformComponent {
  onFormSubmit(tempForm:NgForm){
    console.log(tempForm);
    if(tempForm.valid)
    {
      alert("comfirm form submission");
      document.write("form Submited Successfully..")
      document.write("form submited...");

    }
    else
    {
      alert("form is not valid");
    }
  }
}
