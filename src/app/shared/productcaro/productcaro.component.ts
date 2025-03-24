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
    dots: true,

    navSpeed: 700,
    margin: 20,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 2.2
      },
      400: {
        items: 2.2
      },
      740: {
        items: 2.1
      },
      940: {
        items: 4.5
      }
    },
  };

  @Input() products: any[] = [];




  constructor() { }
  ngOnInit(): void {
    this.title1 = this.title1;
    this.title2 = this.title2;
    this.href = this.href;
    this.buttonText = this.buttonText;
    this.products = this.products;
  }


  addToCart(product: any): void {
    // Implement add to cart functionality
  }

  toggleWishlist(product: any): void {
    // Implement wishlist functionality
  }
}
