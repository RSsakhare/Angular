import { Component } from '@angular/core';
import { CourseDetails } from './CourseDetails';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  course1 = new CourseDetails("Angular Fundamentals", "Angular", 10000, "40 hours");
  course2 = new CourseDetails("React for Beginners", "React", 8000, "30 hours");
  course3 = new CourseDetails("Node.js and Express", "Node.js", 12000, "50 hours");

}
