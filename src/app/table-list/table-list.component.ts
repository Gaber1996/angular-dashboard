import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'app/Models/product/iproduct';
import { ProductsService } from 'app/services/productsService/products.service';

@Component({
  selector: "app-table-list",
  templateUrl: "./table-list.component.html",
  styleUrls: ["./table-list.component.css"],
})
export class TableListComponent implements OnInit {
  //data
  productList:any= {};

  //constructor
  constructor(private ProductsServiceApi: ProductsService) {
    // get all product
    this.ProductsServiceApi.getAllProducts().subscribe(
      (productList) => {
        this.productList = productList;
        console.log(this.productList);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {}
}
