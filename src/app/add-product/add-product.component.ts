class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


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
  public selectedFile: any;
  selectedFile1!: ImageSnippet;

  constructor(
    private ProductsServiceApi: ProductsService,
    private router: Router
  ) {
    // _id: tempStamp,
    // let tempStamp = Date.now() as number;

    this.prd = {
      name: "",
      price: null,
      description: " ",
      image: "",
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

  uploadfile(event) {
    this.selectedFile = event.target;
    console.log(this.selectedFile);
    console.log(event.target.files[0].image);
    return this.ProductsServiceApi.upload(this.selectedFile).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
      },
      (err) => {
        console.log(err);
      }
    );
  }

 processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile1 = new ImageSnippet(event.target.result, file);

      this.ProductsServiceApi.upload(this.selectedFile1.file).subscribe(
        (res) => { },
        (err) => {}
      );
    });

    reader.readAsDataURL(file);
  }


  ngOnInit(): void { }
  
}
