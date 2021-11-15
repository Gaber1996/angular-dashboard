import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Iproduct } from "app/Models/product/iproduct";
import { ProductsService } from "app/services/productsService/products.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  prd: Iproduct;

  constructor(
    private ProductsServiceApi: ProductsService,
    private router: Router
  ) {
    // _id: tempStamp,
    // let tempStamp = Date.now() as number;

    this.prd = {
      name: "",
      price: 0,
      description: " ",
      // image:'';
      category: "",
      company: [],
      // colors: [];
    };

  }

  AddProduct() {
    // const prd: Product = {
    //   id: this.id,
    //   Name: this.Name,
    //   Price: this.Price,
    //   Quantity: this.Quantity,
    //   imgURL: (this.imgURL = './assets/1(14).jpg'),
    //   Categoryid: this.Categoryid,
    // };
    this.ProductsServiceApi.addProduct(this.prd).subscribe(
      (res) => {
        return this.router.navigateByUrl("/table-list");
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
}
