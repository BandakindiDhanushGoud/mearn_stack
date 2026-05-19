import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignComponent } from './sign/sign.component';
import { OrderComponent } from './order/order.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { CheckComponent } from './check/check.component';
import { AdminComponent } from './admin/admin.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { BookingComponent } from './booking/booking.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ViewproductComponent,
    SignComponent,
    OrderComponent,
    WishlistComponent,
    CartComponent,
    DetailsComponent,
    CheckComponent,
    AdminComponent,
    ManageproductComponent,
    BookingComponent,
    UserprofileComponent,
    HomeComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
