import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { MapsComponent } from "../../maps/maps.component";
import { AddProductComponent } from "app/add-product/add-product.component";
import { EditproductComponent } from "app/editproduct/editproduct.component";
import { LoginComponent } from "app/login/login.component";
import { AuthenticationGuard } from "app/guard/authentication.guard";

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: "dashboard", component: DashboardComponent ,canActivate: [AuthenticationGuard] },
  { path: "login", component: LoginComponent  ,canActivate: [AuthenticationGuard] },
  { path: "user-profile", component: UserProfileComponent  ,canActivate: [AuthenticationGuard] },
  { path: "table-list", component: TableListComponent  ,canActivate: [AuthenticationGuard] },
  { path: "addproduct", component: AddProductComponent ,canActivate: [AuthenticationGuard] },
  { path: "maps", component: MapsComponent ,canActivate: [AuthenticationGuard] },
  { path: "edit/:id", component: EditproductComponent  ,canActivate: [AuthenticationGuard]},
];
