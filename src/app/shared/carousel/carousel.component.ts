import { Component,NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  carouselOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      // 600: { items: 2 },
      // 1000: { items: 3 }
    }
  };

  items = [

    { image: 'https://seven.wodo.digital/upload/slider/slider610-1.jpg' },
    { image: 'https://seven.wodo.digital/upload/slider/slider610-1.jpg' },
  ];
}
