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
  // homedata: any[] = [{
  //   categoryData: [
  //     {
  //       image: '../../../assets/images/category/5.jpg',
  //       title: 'Kitchen',
  //       link: ''
  //     },
  //     {
  //       image: '../../../assets/images/category/6.jpg',
  //       title: 'Digital Camera',
  //       link: ''
  //     },
  //     {
  //       image: '../../../assets/images/category/1.jpg',
  //       title: 'Television',
  //       link: ''
  //     },
  //     {
  //       image: '../../../assets/images/category/2.jpg',
  //       title: 'Smartphones',
  //       link: ''
  //     },
  //     {
  //       image: '../../../assets/images/category/4.jpg',
  //       title: 'Gaming',
  //       link: ''
  //     },
  //     {
  //       image: '../../../assets/images/category/3.jpg',
  //       title: 'Personal Care',
  //       link: ''
  //     },
  //     {
  //       image: '../../../assets/images/category/6.jpg',
  //       title: 'Digital Camera',
  //       link: ''
  //     },
  //     {
  //       image: '../../../assets/images/category/1.jpg',
  //       title: 'Television',
  //       link: ''
  //     },
  //     {
  //       image: '../../../assets/images/category/2.jpg',
  //       title: 'Smartphones',
  //       link: ''
  //     },
  //     {
  //       image: '../../../assets/images/category/4.jpg',
  //       title: 'Gaming',
  //       link: ''
  //     },
  //     {
  //       image: '../../../assets/images/category/3.jpg',
  //       title: 'Personal Care',
  //       link: ''
  //     },

  //   ],
  //   items: [

  //     { image: 'https://seven.wodo.digital/upload/slider/slider610-1.jpg' },
  //     { image: 'https://seven.wodo.digital/upload/slider/slider610-1.jpg' },
  //   ],
  //   topbanner: [
  //     { image: "../../../assets/images/topbanners/1.jpg", link: "category" },
  //     { image: "../../../assets/images/topbanners/2.jpg", link: "category" },
  //     { image: "../../../assets/images/topbanners/3.jpg", link: "category" },
  //     { image: "../../../assets/images/topbanners/4.jpg", link: "category" },
  //   ],
  //   banner: "../../../assets/images/banner/banner1.jpg",

  //   products: [
  //     {
  //       id: 1,
  //       brand: 'CANON',
  //       name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
  //       image: '../../../assets/images/products/product1.png',
  //       price: 560,
  //       sprice: 560,
  //       quantity: 1,
  //       rating: 3.5,
  //       sale: true,
  //       expressDelivery: true,
  //       standardDelivery: false,


  //     },
  //     {
        // id: 2,
        // brand: 'CANON',
        // name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
        // image: '../../../assets/images/products/product1.png',
        // price: 560,
        // sprice: 560,
        // quantity: 1,
        // rating: 3.5,
        // sale: false,
        // expressDelivery: false,
        // standardDelivery: true,

  //     },
  //     {
  //       id: 3,
  //       brand: 'CANON 10',
  //       name: 'Hitachi Drum ',
  //       image: '../../../assets/images/products/product1.png',
  //       price: 560,
  //       sprice: 560,
  //       quantity: 10,
  //       rating: 3.5,
  //       sale: true,
  //       expressDelivery: true,
  //       standardDelivery: false,

  //     },
  //     {
  //       id: 4,
  //       brand: 'CANON',
  //       name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
  //       image: '../../../assets/images/products/product1.png',
  //       price: 560,
  //       sprice: 560,
  //       quantity: 0,
  //       rating: 3.5,
  //       sale: false,
  //       expressDelivery: false,
  //       standardDelivery: false,

  //     },
  //     {
  //       id: 5,
  //       brand: 'CANON',
  //       name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
  //       image: '../../../assets/images/products/product1.png',
  //       price: 560,
  //       sprice: 560,
  //       quantity: 0,
  //       rating: 3.5,
  //       sale: true,
  //       expressDelivery: true,
  //       standardDelivery: false,

  //     },
  //     {
  //       id: 6,
  //       brand: 'CANON',
  //       name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
  //       image: '../../../assets/images/products/product1.png',
  //       price: 560,
  //       sprice: 360,
  //       quantity: 0,
  //       rating: 3.5,
  //       sale: false,
  //       expressDelivery: false,
  //       standardDelivery: true,

  //     },
  //     // Add more products here

  //   ],
    // shopbycatData: [
    //   {
    //     products: [
    //       {
    //         title: 'Gaming',
    //         link: '#',
    //         products: [
    //           {
    //             image: '../../../assets/images/shopbycat/1.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: 'home',

    //           },
    //           {
    //             image: '../../../assets/images/shopbycat/2.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: '#',
    //           },
    //           {
    //             image: '../../../assets/images/shopbycat/3.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: '#',
    //           },
    //           {
    //             image: '../../../assets/images/shopbycat/4.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: '#',
    //           }
    //         ]
    //       },
    //       {
    //         title: 'Gaming',
    //         link: '#',
    //         products: [
    //           {
    //             image: '../../../assets/images/shopbycat/1.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: 'home',

    //           },
    //           {
    //             image: '../../../assets/images/shopbycat/2.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: '#',
    //           },
    //           {
    //             image: '../../../assets/images/shopbycat/3.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: '#',
    //           },
    //           {
    //             image: '../../../assets/images/shopbycat/4.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: '#',
    //           }
    //         ]
    //       },
    //       {
    //         title: 'Gaming',
    //         link: '#',
    //         products: [
    //           {
    //             image: '../../../assets/images/shopbycat/1.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: 'home',

    //           },
    //           {
    //             image: '../../../assets/images/shopbycat/2.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: '#',
    //           },
    //           {
    //             image: '../../../assets/images/shopbycat/3.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: '#',
    //           },
    //           {
    //             image: '../../../assets/images/shopbycat/4.png',
    //             title: 'MICROSOFT',
    //             description: 'Xbox Series X Controller',
    //             link: '#',
    //           }
    //         ]
    //       },
    //     ]
    //   }
    // ],
  //   dealsData: [
  //     {
  //       image: "../../../assets/images/fastselling/1.png",
  //       sale: "30% off",
  //       title: "On all products"
  //     },
  //     {
  //       image: "../../../assets/images/fastselling/2.png",
  //       sale: "30% off",
  //       title: "On all products"
  //     },
  //     {
  //       image: "../../../assets/images/fastselling/3.png",
  //       sale: "30% off",
  //       title: "On all products"
  //     },
  //     {
  //       image: "../../../assets/images/fastselling/4.png",
  //       sale: "30% off",
  //       title: "On all products"
  //     },
  //     {
  //       image: "../../../assets/images/fastselling/5.png",
  //       sale: "30% off",
  //       title: "On all products"
  //     },
  //     {
  //       image: "../../../assets/images/fastselling/1.png",
  //       sale: "30% off",
  //       title: "On all products"
  //     }
  //   ],
  //   newproduct: [
  //     "../../../assets/images/newproduct/1.png",
  //     "../../../assets/images/newproduct/2.png",
  //   ],
  //   offers: [
  //     { image: "../../../assets/images/Offers/1.jpg", link: "https://example.com/page1" },
  //     { image: "../../../assets/images/Offers/2.jpg", link: "https://example.com/page2" },
  //     { image: "../../../assets/images/Offers/3.jpg", link: "https://example.com/page3" },
  //     { image: "../../../assets/images/Offers/4.jpg", link: "https://example.com/page4" },
  //   ]

  // }]
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    // this.categoryData = this.homedata[0].categoryData;
    // this.shopbycatData = this.homedata[0].shopbycatData;
    // this.topbanner = this.homedata[0].topbanner;
    // this.items = this.homedata[0].items;
    // this.newproduct = this.homedata[0].newproduct;
    // this.dealsData = this.homedata[0].dealsData;
    // this.offers = this.homedata[0].offers;
    // this.banner = this.homedata[0].banner;
    // this.products = this.homedata[0].products;
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
