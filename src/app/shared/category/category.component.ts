import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { IMAGE_PATHS } from '../constants/api-paths';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-category',
  imports: [CommonModule, CarouselModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  @Input() categoryData: any;
@Input() slug: string = '';
  @Input() isSubCategory: boolean = false;
  @Input() isProductDetails: boolean = false;
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
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 5.5,
      },
      400: {
        items: 5.5
      },
      740: {
        items: 10
      },
      940: {
        items: 10
      }
    },

  };
  ngOnInit(): void {
    this.categoryData = this.categoryData;
    this.isProductDetails = this.isProductDetails;
    this.isSubCategory = this.isSubCategory;
    this.slug = this.slug;
  }


}
