import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
products:any[]=[];
constructor(private productserv:ProductService){}
ngOnInit() {
  this.productserv.getProduct().subscribe((data: any[]) => {
    this.products = data;
  });
}
}
