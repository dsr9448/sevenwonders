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
@Component({
  selector: 'app-home',
  imports: [CarouselComponent, BannersComponent, FeaturebannerComponent, NewproductsComponent, TopbannerComponent, OffersComponent, ProductcaroComponent, SellingfastComponent, DealsComponent, BrandsComponent, CategoryComponent, ShopbycatComponent, ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categoryData = [
    {
      image: '../../../assets/images/category/5.jpg',
      title: 'Kitchen',
      link: ''
    },
    {
      image: '../../../assets/images/category/6.jpg',
      title: 'Digital Camera',
      link: ''
    },
    {
      image: '../../../assets/images/category/1.jpg',
      title: 'Television',
      link: ''
    },
    {
      image: '../../../assets/images/category/2.jpg',
      title: 'Smartphones',
      link: ''
    },
    {
      image: '../../../assets/images/category/4.jpg',
      title: 'Gaming',
      link: ''
    },
    {
      image: '../../../assets/images/category/3.jpg',
      title: 'Personal Care',
      link: ''
    },
    {
      image: '../../../assets/images/category/6.jpg',
      title: 'Digital Camera',
      link: ''
    },
    {
      image: '../../../assets/images/category/1.jpg',
      title: 'Television',
      link: ''
    },
    {
      image: '../../../assets/images/category/2.jpg',
      title: 'Smartphones',
      link: ''
    },
    {
      image: '../../../assets/images/category/4.jpg',
      title: 'Gaming',
      link: ''
    },
    {
      image: '../../../assets/images/category/3.jpg',
      title: 'Personal Care',
      link: ''
    },

  ];
  items = [

    { image: 'https://seven.wodo.digital/upload/slider/slider610-1.jpg' },
    { image: 'https://seven.wodo.digital/upload/slider/slider610-1.jpg' },
  ];
  topbanner: any[] = [
    { image: "../../../assets/images/topbanners/1.jpg", link: "category" },
    { image: "../../../assets/images/topbanners/2.jpg", link: "category" },
    { image: "../../../assets/images/topbanners/3.jpg", link: "category" },
    { image: "../../../assets/images/topbanners/4.jpg", link: "category" },
  ];
  banner: string = "../../../assets/images/banner/banner1.jpg";

  products = [
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: '../../../assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: true,
      expressDelivery: true,
      standardDelivery: false,

      discount: 20
    },
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: '../../../assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: false,
      expressDelivery: false,
      standardDelivery: true,
      discount: 20
    },
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: '../../../assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: true,
      expressDelivery: true,
      standardDelivery: false,
      discount: 20
    },
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: '../../../assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: false,
      expressDelivery: false,
      standardDelivery: false,
      discount: 20
    },
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: '../../../assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: true,
      expressDelivery: true,
      standardDelivery: false,
      discount: 20
    },
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: '../../../assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: false,
      expressDelivery: false,
      standardDelivery: true,
      discount: 20
    },
    // Add more products here

  ];
  shopbycatData = [
    {
      products:[
          {
            title: 'Gaming',
            link: '#',
            products: [
              {
                image: '../../../assets/images/shopbycat/1.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: 'home',
      
              },
              {
                image: '../../../assets/images/shopbycat/2.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: '#',
              },
              {
                image: '../../../assets/images/shopbycat/3.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: '#',
              },
              {
                image: '../../../assets/images/shopbycat/4.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: '#',
              }
            ]
          },
          {
            title: 'Gaming',
            link: '#',
            products: [
              {
                image: '../../../assets/images/shopbycat/1.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: 'home',
      
              },
              {
                image: '../../../assets/images/shopbycat/2.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: '#',
              },
              {
                image: '../../../assets/images/shopbycat/3.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: '#',
              },
              {
                image: '../../../assets/images/shopbycat/4.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: '#',
              }
            ]
          },
          {
            title: 'Gaming',
            link: '#',
            products: [
              {
                image: '../../../assets/images/shopbycat/1.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: 'home',
      
              },
              {
                image: '../../../assets/images/shopbycat/2.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: '#',
              },
              {
                image: '../../../assets/images/shopbycat/3.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: '#',
              },
              {
                image: '../../../assets/images/shopbycat/4.png',
                title: 'MICROSOFT',
                description: 'Xbox Series X Controller',
                link: '#',
              }
            ]
          },
      ]
    }
  ];
  dealsData: any[] = [
    {
      image:"../../../assets/images/fastselling/1.png",
      sale:"30% off",
      title:"On all products"
    },
    {
      image:"../../../assets/images/fastselling/2.png",
      sale:"30% off",
      title:"On all products"
    },
    {
      image:"../../../assets/images/fastselling/3.png",
      sale:"30% off",
      title:"On all products"
    },
    {
      image:"../../../assets/images/fastselling/4.png",
      sale:"30% off",
      title:"On all products"
    } ,
    {
      image:"../../../assets/images/fastselling/5.png",
      sale:"30% off",
      title:"On all products"
    },
    {
      image:"../../../assets/images/fastselling/1.png",
      sale:"30% off",
      title:"On all products"
    }
  ];
  newproduct = [
    "../../../assets/images/newproduct/1.png",
    "../../../assets/images/newproduct/2.png",
  ];
  offers: any[]= [
    { image: "../../../assets/images/Offers/1.jpg", link: "https://example.com/page1" },
    { image: "../../../assets/images/Offers/2.jpg", link: "https://example.com/page2" },
    { image: "../../../assets/images/Offers/3.jpg", link: "https://example.com/page3" },
    { image: "../../../assets/images/Offers/4.jpg", link: "https://example.com/page4" },
  ]
  ngOnInit(): void {
    this.categoryData = this.categoryData;
    this.shopbycatData = this.shopbycatData;
    this.items = this.items;
    this.newproduct = this.newproduct;
    this.dealsData = this.dealsData;
    this.offers = this.offers;
  }

}
