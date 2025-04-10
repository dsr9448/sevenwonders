import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HeadingComponent } from "../heading/heading.component";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartService } from '../../services/cartservices';
import { IMAGE_PATHS } from '../constants/api-paths'; 
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-productcaro',
  standalone: true,
  imports: [HeadingComponent, CarouselModule, NgFor, NgIf, CommonModule,RouterModule],
  templateUrl: './productcaro.component.html',
  styleUrl: './productcaro.component.css'
})
export class ProductcaroComponent implements OnInit {
  @Input() title1: string = '';
  @Input() title2: string = '';
  @Input() href: string = '';
  @Input() buttonText: string = '';
  imagePath = IMAGE_PATHS;

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

  constructor(private cartService: CartService, private apiService: ApiService, private snackBar: MatSnackBar) { }

  openCart() {
    this.cartService.showCart();
  }

  ngOnInit(): void {
    this.title1 = this.title1;
    this.title2 = this.title2;
    this.href = this.href;
    this.buttonText = this.buttonText;
    this.products = this.products;
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.cartService.showCart();
  }

  toggleWishlist(product: any): void {
    this.apiService.addToWishlist(product.id).subscribe((data) => {
      console.log(data);
      this.snackBar.open('Product added to wishlist', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['snackbar-container'],
      });
    });
  }
}

