import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeadingComponent } from "../heading/heading.component";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-productcaro',
  imports: [HeadingComponent, CarouselModule, NgFor, NgIf],
  templateUrl: './productcaro.component.html',
  styleUrl: './productcaro.component.css'
})
export class ProductcaroComponent implements OnInit {
  @Input() title1: string = '';
  @Input() title2: string = '';
  @Input() href: string = '';
  @Input() buttonText: string = '';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },

  };

  products = [
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: 'http://localhost:4200/assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: true,
      expressDelivery: true,
      discount: 20
    },
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: 'http://localhost:4200/assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: false,
      expressDelivery: true,
      discount: 20
    },
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: 'http://localhost:4200/assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: true,
      expressDelivery: true,
      discount: 20
    },
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: 'http://localhost:4200/assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: false,
      expressDelivery: true,
      discount: 20
    },
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: 'http://localhost:4200/assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: true,
      expressDelivery: true,
      discount: 20
    },
    {
      brand: 'CANON',
      name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
      image: 'http://localhost:4200/assets/images/products/product1.png',
      price: 560,
      rating: 3.5,
      sale: false,
      expressDelivery: true,
      discount: 20
    },
    // Add more products here
  ];




  constructor() { }
  ngOnInit(): void {
    // this.title1 = this.title1;
    // this.title2 = this.title2;
    // this.href = this.href;
    // this.buttonText = this.buttonText;
    // this.products = this.products;
  }


  addToCart(product: any): void {
    // Implement add to cart functionality
  }

  toggleWishlist(product: any): void {
    // Implement wishlist functionality
  }
}
