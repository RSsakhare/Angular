import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonmaterialComponent } from './test/buttonmaterial.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonmaterialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mytestingapp';
}
