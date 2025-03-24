import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ProductcategoryComponent } from './pages/productcategory/productcategory.component';
import { ProductsubcategoryComponent } from './pages/productsubcategory/productsubcategory.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: ProductcategoryComponent },
  {path: 'subcategory', component: ProductsubcategoryComponent},
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
