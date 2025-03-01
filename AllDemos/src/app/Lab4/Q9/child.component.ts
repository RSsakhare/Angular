import { Component, Input } from '@angular/core';
import { CourseDetails } from './CourseDetails';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() course!: CourseDetails; // Use the CourseDetails class
}
