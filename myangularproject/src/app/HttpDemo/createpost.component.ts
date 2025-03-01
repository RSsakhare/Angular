import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-createpost',
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,ReactiveFormsModule
  ],
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.css'
})
export class CreatepostComponent {
  post = new FormGroup({
    id: new FormControl(''),    // Default empty string
    title: new FormControl(''), // Default empty string
    body: new FormControl('')   // Added body field
  });

  constructor(private apiseserv: ApiserviceService) {}

  onSubmit() {
    this.apiseserv.createPost(this.post.value).subscribe(response => {
      console.log("Post created successfully", response);
      // Optionally, you could reset the form or navigate to another page
      this.post.reset();
    });
  }
    
  }





 