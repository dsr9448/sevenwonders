import { Component,OnInit,Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';
import { IMAGE_PATHS } from '../../shared/constants/api-paths';

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent  implements OnInit{
  @Input() items: any[] = [];
  imagePath = IMAGE_PATHS.slider;
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


  ngOnInit(): void {
    this.items = this.items;
  }
}
