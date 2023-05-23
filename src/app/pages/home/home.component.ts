import { Component, OnInit } from '@angular/core';
import { ProdudctService } from 'src/app/services/produdct.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productList: any[] = [];
  cartObj : any = {
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2023-05-22T14:46:48.700Z"
  }
  constructor(private productService: ProdudctService){

  }

  ngOnInit(): void {
      this.loadAllProducts();
  }

  loadAllProducts(){
    this.productService.getAllProducts().subscribe((result: any) => {
      this.productList = result.data
      console.log(this.productList);
    });
  }

  addItemToCart(productId: number) {
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result: any)=>{
       if(result.result) {
        alert("Product Added To Cart");
        this.productService.cartAddedSubject.next(true);
       }
    })
  }
}
