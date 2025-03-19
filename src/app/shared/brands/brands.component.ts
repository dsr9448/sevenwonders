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
      link: '',
      image: '../../../assets/images/brands/brands (1).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (2).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (3).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (4).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (5).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (6).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (7).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (8).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (9).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (10).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (11).jpg'
    },

    {
      link: '',
      image: '../../../assets/images/brands/brands (9).jpg'
    },

  ]
}
