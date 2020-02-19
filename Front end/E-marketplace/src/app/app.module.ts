import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
export const appRoutes: Routes= [
  {path:'category',component:CategoryComponent},
  {path:'cart',component:CartComponent},
  {path:'product',component:ProductComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductComponent,
    HomeComponent,
    CategoryComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
