import { Component } from '@angular/core';
import { MatButtonModule} from '@angular/material/button'
import { MatDividerModule} from '@angular/material/divider'
import { MatIconModule} from '@angular/material/icon'


@Component({
  selector: 'app-buttonmaterial',
  imports: [MatButtonModule,MatDividerModule,MatIconModule],
  templateUrl: './buttonmaterial.component.html',
  styleUrl: './buttonmaterial.component.css'
})
export class ButtonmaterialComponent {

}
