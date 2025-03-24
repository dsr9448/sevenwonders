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
@Component({
  selector: 'app-productcategory',
  imports: [BreadcrumbComponent, CategoryComponent, TopbannerComponent, BannersComponent, ProductcaroComponent, NewproductsComponent, ShopbycatComponent, DealsComponent, OffersComponent, TrendingdealsComponent, ProductlistingComponent, HeadingComponent],
  templateUrl: './productcategory.component.html',
  styleUrl: './productcategory.component.css'
})
export class ProductcategoryComponent implements OnInit {
  iscenter = true;
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

    { image: '../../../assets/images/banner/bannet2.jpg' },
    { image: '../../../assets/images/banner/bannet2.jpg' },
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
  newproduct = [
    "../../../assets/images/newproduct/1.png",
    "../../../assets/images/newproduct/2.png",
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
    offers: any[]= [
    { image: "../../../assets/images/Offers/1.jpg", link: "https://example.com/page1" },
    { image: "../../../assets/images/Offers/2.jpg", link: "https://example.com/page2" },
    { image: "../../../assets/images/Offers/3.jpg", link: "https://example.com/page3" },
  ];
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
  productdata = [
    {
      productlist: [
        {
          brand: 'sony',
          name: 'Sony Alpha Mirrorless Camera with 24.2MP Sensor',
          image: '../../../assets/images/products/product1.png',
          price: 60,
          rating: 4.8,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          quantity: 1,
          discount: 20
        },
        {
          brand: 'nikon',
          name: 'Nikon D3500 DSLR Camera with 18-55mm Lens',
          image: '../../../assets/images/products/product1.png',
          price: 850,
          rating: 3.2,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          quantity: 0,
          discount: 20
        },
        {
          brand: 'fujifilm',
          name: 'Fujifilm X-T4 Mirrorless Camera Body',
          image: '../../../assets/images/products/product1.png',
          price: 260,
          rating: 5.0,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 0
        },
        {
          brand: 'panasonic',
          name: 'Panasonic Lumix G7 4K Mirrorless Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.1,
          sale: false,
          expressDelivery: false,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'olympus',
          name: 'Olympus OM-D E-M10 Mark III Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.8,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'canon',
          name: 'Canon EOS M50 Mirrorless Vlogging Camera Kit',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'nikon',
          name: 'Nikon D3500 DSLR Camera with 18-55mm Lens',
          image: '../../../assets/images/products/product1.png',
          price: 850,
          rating: 3.2,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          quantity: 0,
          discount: 20
        },
        {
          brand: 'fujifilm',
          name: 'Fujifilm X-T4 Mirrorless Camera Body',
          image: '../../../assets/images/products/product1.png',
          price: 260,
          rating: 5.0,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 0
        },
        {
          brand: 'panasonic',
          name: 'Panasonic Lumix G7 4K Mirrorless Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.1,
          sale: false,
          expressDelivery: false,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'olympus',
          name: 'Olympus OM-D E-M10 Mark III Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.8,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'canon',
          name: 'Canon EOS M50 Mirrorless Vlogging Camera Kit',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'fujifilm',
          name: 'Fujifilm X-T4 Mirrorless Camera Body',
          image: '../../../assets/images/products/product1.png',
          price: 260,
          rating: 5.0,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 0
        },
        {
          brand: 'panasonic',
          name: 'Panasonic Lumix G7 4K Mirrorless Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.1,
          sale: false,
          expressDelivery: false,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'olympus',
          name: 'Olympus OM-D E-M10 Mark III Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.8,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'canon',
          name: 'Canon EOS M50 Mirrorless Vlogging Camera Kit',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'nikon',
          name: 'Nikon D3500 DSLR Camera with 18-55mm Lens',
          image: '../../../assets/images/products/product1.png',
          price: 850,
          rating: 3.2,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          quantity: 0,
          discount: 20
        },
        {
          brand: 'fujifilm',
          name: 'Fujifilm X-T4 Mirrorless Camera Body',
          image: '../../../assets/images/products/product1.png',
          price: 260,
          rating: 5.0,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 0
        },
        {
          brand: 'panasonic',
          name: 'Panasonic Lumix G7 4K Mirrorless Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.1,
          sale: false,
          expressDelivery: false,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'olympus',
          name: 'Olympus OM-D E-M10 Mark III Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.8,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'canon',
          name: 'Canon EOS M50 Mirrorless Vlogging Camera Kit',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          discount: 20,
          quantity: 1
        }
      ],
      bannerImage: [
       
      ]


    }
  ];
  ngOnInit(): void {
    this.categoryData = this.categoryData;
    this.items = this.items;
    this.topbanner = this.topbanner;
    this.banner = this.banner;
    this.products = this.products;
    this.newproduct = this.newproduct;
    this.shopbycatData = this.shopbycatData;
    this.dealsData = this.dealsData;
     this.offers = this.offers;
     this.dealsdata = this.dealsdata;
     this.productdata = this.productdata;
  }

}
