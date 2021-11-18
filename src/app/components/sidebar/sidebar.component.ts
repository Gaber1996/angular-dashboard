import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Admin Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Products List',  icon:'content_paste', class: '' },
    { path: '/addproduct', title: 'Add Product',  icon:'add_shopping_cart', class: '' },
    { path: '/orders', title: 'Orders',  icon:'filter_none', class: '' },
    { path: '/users', title: 'Users',  icon:'group', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
