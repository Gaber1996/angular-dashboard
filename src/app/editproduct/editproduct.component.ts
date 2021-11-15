import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'app/Models/product/iproduct';
import { ProductsService } from 'app/services/productsService/products.service';

@Component({
  selector: "app-editproduct",
  templateUrl: "./editproduct.component.html",
  styleUrls: ["./editproduct.component.scss"],
})
export class EditproductComponent implements OnInit {
  prd: Iproduct;
  id: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductsServiceApi: ProductsService,
    private router: Router
  ) {
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

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id =paramMap.get("id");
      console.log(" this.id", this.id);
      
    });
  }

  EditProduct(EditProduct: string, prd: Iproduct) {
    console.log(" EditProduct", EditProduct);
    
    this.ProductsServiceApi.EditProduct(EditProduct, prd).subscribe(
      (res) => {
        // return this.router.navigateByUrl('/Admin/newproduct');
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // this.router.onSameUrlNavigation = "reload";
        // this.router.navigate(["/Admin/newproduct"]);

     return this.router.navigateByUrl("/table-list");      },
      (err) => {
        console.log(err);
      }
    );

  }


}
