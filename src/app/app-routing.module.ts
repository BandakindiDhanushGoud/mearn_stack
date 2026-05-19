import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { SignComponent } from './sign/sign.component';
import { OrderComponent } from './order/order.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { CheckComponent } from './check/check.component';
import { AdminComponent } from './admin/admin.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'sign',component:SignComponent},
  {path:'user',component:DashboardComponent,
    children:[
      {path:'home',component:LandingComponent},
      {path:'viewproduct',component:ViewproductComponent},
      {path:'order',component:OrderComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'cart',component:CartComponent},
      {path:'details/:id',component:DetailsComponent},
      {path:'check',component:CheckComponent}
    ]},

  {
    path: 'admin',component: AdminComponent,
    children: [
      { path: 'home', component: AdminComponent},
      { path: 'products', component: ManageproductComponent },
      { path: 'booking', component: BookingComponent}
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
