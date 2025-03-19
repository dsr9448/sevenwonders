import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-brands',
  imports: [NgFor],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {

  brandsData = [
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (1).jpg'
    },
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (2).jpg'
    },
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (3).jpg'
    },
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (4).jpg'
    },
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (5).jpg'
    },
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (6).jpg'
    },
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (7).jpg'
    },
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (8).jpg'
    },
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (9).jpg'
    },
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (10).jpg'
    },
    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (11).jpg'
    },

    {
      link: 'https://www.google.com',
      image: '../../../assets/images/brands/brands (9).jpg'
    },

  ]
}
