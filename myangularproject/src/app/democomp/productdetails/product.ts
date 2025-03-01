export class Product
{
    productcode:string;
    productName:string;
    price:number;

    constructor(productcode:string,productName:string,price:number)
    {
        this.productcode=productcode;
        this.productName=productName;
        this.price=price;
    }
}