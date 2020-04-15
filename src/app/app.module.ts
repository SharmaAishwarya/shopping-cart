import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { DealsOfTheDayComponent } from './deals-of-the-day/deals-of-the-day.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUPComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';
import { FormsModule , Validators} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductLaneComponent } from './product-lane/product-lane.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    MenuComponent,
    DealsOfTheDayComponent,
    LoginComponent,
    FooterComponent,
    SignUPComponent,
    ProductComponent,
    CartComponent,
    ProductLaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
