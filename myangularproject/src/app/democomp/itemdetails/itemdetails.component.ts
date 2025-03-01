import { Component } from '@angular/core';

@Component({
  selector: 'app-itemdetails',
  imports: [],
  template: `
    <p>
      itemdetails works!
    </p>
    <h3>Item Details</h3>
    <div>
      <p>Item Code: {{obj.Itemcode}}</p>
      <p>Item Name: {{obj.ItemName}}</p>
      <p>Item Price: {{obj.price}}</p>
    </div>
  `,
  styles: ``
})
export class ItemdetailsComponent {
  obj:any;
  constructor()
  {
    this.obj={Itemcode:"P11",ItemName:"PC",price:3200};
  }
}
