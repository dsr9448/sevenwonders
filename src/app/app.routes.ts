import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ProductcategoryComponent } from './pages/productcategory/productcategory.component';
import { ProductsubcategoryComponent } from './pages/productsubcategory/productsubcategory.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { PreloaderComponent } from './shared/preloder/preloder.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'preloader', component: PreloaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'category/:slug', component: ProductcategoryComponent },
  {path: 'subcategory/:slug', component: ProductsubcategoryComponent},
  {path: 'product/:productId', component: ProductdetailsComponent},
  {path: 'cart', component: CartComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path:'forgetpassword', component: ForgetpasswordComponent},
  {path:'wishlist', component: WishlistComponent},
  {path:'dashboard', component: DashboardComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', 
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
