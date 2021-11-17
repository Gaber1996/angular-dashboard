class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Iproduct } from "app/Models/product/iproduct";
import { ProductsService } from "app/services/productsService/products.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  imgFile: string;

  prd: Iproduct;
  public selectedFile: any;
  selectedFile1!: ImageSnippet;
  private httpOptions1 = {};

  constructor(
    private ProductsServiceApi: ProductsService,
    private router: Router,
    private httpClient: HttpClient
  ) {
    // _id: tempStamp,
    // let tempStamp = Date.now() as number;

    this.httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "image/jpeg",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFzbWluIiwidXNlcklkIjoiNjE4YzBkZmZhZThhYzM2MTUyNjY4ZGZhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjM3MDgyODc2LCJleHAiOjE2MzcxNjkyNzZ9.UP-mV-02vipTWYmZeWtCh8ro2z0nK632nCNA4_-YGdE",
      }),
    };

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

  // onImageChange(e) {
  //   const reader = new FileReader();

  //   if (e.target.files && e.target.files.length) {
  //     const [file] = e.target.files;
  //     reader.readAsDataURL(file);

  //     reader.onload = () => {
  //       this.imgFile = reader.result as string;
  //       this.uploadForm.patchValue({
  //         imgSrc: reader.result,
  //       });
  //     };
  //   }
  // }

  uploadfile(event) {
    this.selectedFile = event.target.files[0];
    console.log("this.selectedFile", this.selectedFile);
    console.log("event.target.files[0]", event.target.files[0]);
    return this.ProductsServiceApi.upload(this.selectedFile).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    console.log(fileList);

    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append("uploadFile", file, file.name);
      let headers = new Headers();
      /** In Angular 5, including the header Content-Type can invalidate your request */
      headers.append("Content-Type", "multipart/form-data");
      headers.append("Accept", "application/json");
      // let options = new RequestOptions({ headers: headers });
      this.httpClient
        .post(`localhost:5000/api/v1/products/uploadImage`, formData, this.httpOptions1)
        .pipe(map((res: any) => res.json()))
        .subscribe(
          (data) => console.log("success"),
          (error) => console.log(error)
        );
    }
  }

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener("load", (event: any) => {
  //     this.selectedFile1 = new ImageSnippet(event.target.result, file);

  //     this.ProductsServiceApi.upload(this.selectedFile1.file).subscribe(
  //       (res) => {},
  //       (err) => {}
  //     );
  //   });

  //   reader.readAsDataURL(file);
  // }

  //   processFile2(file: File): void {
  //     const formData = new FormData();
  //     formData.append("image", file);

  // if (file) {
  //   this.ProductsServiceApi.upload(formData).subscribe(
  //     (res) => {console.log(res);
  //     },
  //     (err) => {console.log(err);
  //     }
  //   );
  // }

  // }

  ngOnInit(): void {}
}
