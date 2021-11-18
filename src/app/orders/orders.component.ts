import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Iproduct } from 'app/Models/product/iproduct';
import { OrdersService } from 'app/services/orders/orders.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orderList:any={};
  orderCount:number=null

constructor (private orderService:OrdersService){
  this.orderService.getAllOrders().subscribe((orderList)=>{
    console.log(orderList)
    this.orderList=orderList
    this.orderCount=orderList.count

    // this.orderList=orderList.orders
    // for(var i =0 ; i<orderList.orders.)
  

  },
  (err)=>{
    console.log(err)
  })

}  
  

 
}
