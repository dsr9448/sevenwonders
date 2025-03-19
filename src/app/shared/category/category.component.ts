import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-category',
  imports: [NgFor, CarouselModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
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
    
    
    
    
  ]

}
