import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
product!:Product
constructor()
{
  this.product= new Product("p11","Monitor",3000);
}
}
