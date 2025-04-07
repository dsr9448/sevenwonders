import { Component, OnInit } from '@angular/core';
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
import { ReviewsComponent } from '../../shared/reviews/reviews.component';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselComponent, BannersComponent, FeaturebannerComponent, NewproductsComponent, TopbannerComponent, OffersComponent, ProductcaroComponent, SellingfastComponent, DealsComponent, BrandsComponent, CategoryComponent, ShopbycatComponent, ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  homepageData: any;
  categoryData: any[] = [];
  shopbycatData: any[] = [];
  items: any[] = [];
  newproduct: any[] = [];
  dealsData: any[] = [];
  offers: any[] = [];
  banner:string = "";
  products:any[] = [];
  topbanner:any[] = [];

  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.api.getHomepageData().subscribe({
      next: (res) => {
        this.homepageData = res?.homedata || {};
        this.categoryData = this.homepageData.categoryData;
      },
      error: (err) => {
        console.error('Error fetching homepage data:', err);
      }
    });
  }

}
