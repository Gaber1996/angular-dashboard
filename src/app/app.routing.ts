import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { LoginguardGuard } from './guard/loginguard.guard';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: "",
    // redirectTo: "login",
    // pathMatch: "full",
    component: LoginComponent,
    canActivate: [LoginguardGuard],
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
      // { path: "**", component: NotfoundComponent },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
    HttpClientModule,

  ],
  exports: [],
})
export class AppRoutingModule {}
