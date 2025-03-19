import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { BannersComponent } from "../../shared/banners/banners.component";
import { FeaturebannerComponent } from '../../shared/featurebanner/featurebanner.component';
import { NewproductsComponent } from "../../shared/newproducts/newproducts.component";
import { TopbannerComponent } from '../../shared/topbanner/topbanner.component';
import { OffersComponent } from "../../shared/offers/offers.component";
import { ProductcaroComponent } from "../../shared/productcaro/productcaro.component";
import { SellingfastComponent } from "../../shared/sellingfast/sellingfast.component";
import { DealsComponent } from "../../shared/deals/deals.component";  
import { BrandsComponent } from '../../shared/brands/brands.component';
import { CategoryComponent } from "../../shared/category/category.component";
import { ShopbycatComponent } from "../../shared/shopbycat/shopbycat.component";
@Component({
  selector: 'app-home',
  imports: [CarouselComponent, BannersComponent, FeaturebannerComponent, NewproductsComponent, TopbannerComponent, OffersComponent, ProductcaroComponent, SellingfastComponent, DealsComponent, BrandsComponent, CategoryComponent, ShopbycatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
