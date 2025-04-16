import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/BreadcrumbComponent';
import { CategoryComponent } from '../../shared/category/category.component';
import { TopbannerComponent } from '../../shared/topbanner/topbanner.component';
import { BannersComponent } from '../../shared/banners/banners.component';
import { ProductcaroComponent } from '../../shared/productcaro/productcaro.component';
import { NewproductsComponent } from '../../shared/newproducts/newproducts.component';
import { ShopbycatComponent } from '../../shared/shopbycat/shopbycat.component';
import { DealsComponent } from '../../shared/deals/deals.component';
import { OffersComponent } from "../../shared/offers/offers.component";
import { TrendingdealsComponent } from "../../shared/trendingdeals/trendingdeals.component";
import { ProductlistingComponent } from '../../shared/productlisting/productlisting.component';
import { HeadingComponent } from "../../shared/heading/heading.component";
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productcategory',
  imports: [CommonModule, BreadcrumbComponent, CategoryComponent, TopbannerComponent, BannersComponent, ProductcaroComponent, NewproductsComponent, ShopbycatComponent, DealsComponent, OffersComponent, TrendingdealsComponent, ProductlistingComponent, HeadingComponent],
  templateUrl: './productcategory.component.html',
  styleUrl: './productcategory.component.css'
})
export class ProductcategoryComponent implements OnInit {
  iscenter = true;
  categoryData: any;
  slug: string = '';
  constructor(private api: ApiService, private route: ActivatedRoute) { }
  
  dealsdata = [
    {
      deals: [

        {
          title: "MICROSOFT",
          description: "Xbox Series X Controller Carbon Black",
          image: "../../../assets/images/shopbycat/1.png",
          link: "/"
        },
        {
          title: "MICROSOFT",
          description: "Xbox Series X Controller Carbon Black",
          image: "../../../assets/images/shopbycat/2.png",
          link: "/"
        },
        {
          title: "MICROSOFT",
          description: "Xbox Series X Controller Carbon Black",
          image: "../../../assets/images/shopbycat/3.png",
          link: "/"
        },


      ],
      banner: {
        image: "../../../assets/images/Offers/2.jpg",
        link: "/"
      }
    }
  ];
 
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
    });
   
    this.api.getCategoryData(this.slug).subscribe((res) => {
      this.categoryData = res?.categorypage || {};

    });
  }
}


