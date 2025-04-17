import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { IMAGE_PATHS } from '../constants/api-paths';
@Component({
  selector: 'app-reviews',
  imports: [CommonModule, CarouselModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
  @Input() reviews: any;
  imagePath = IMAGE_PATHS.reviews;
  averageRating = 4.9;
  totalReviews = 598;

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
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
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 }
    },

  };

  toggleReadMore(review: any) {
    review.isExpanded = !review.isExpanded;
  }

  ngOnInit(): void {
    this.reviews = this.reviews;
  }
}
