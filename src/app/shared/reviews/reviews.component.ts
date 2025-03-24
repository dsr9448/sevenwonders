import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, CarouselModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
  reviews: any = [
    {
      name: "John Smith",
      rating: "5",
      comment: "Excellent service! The aquarium products were top-notch and delivery was quick. Highly recommend Sea Wonders for all marine enthusiasts.",
      image: 'https://placehold.co/400x400',
    },
    {
      name: "Sarah Johnson",
      rating: "4",
      comment: "Great selection of marine life and equipment. Staff was very knowledgeable and helpful. Would definitely shop here again.",
      image: 'https://placehold.co/400x400',
    },
    {
      name: "Mike Anderson",
      rating: "5",
      comment: "Outstanding experience with Sea Wonders. Their expertise in marine life is impressive. The fish I purchased are healthy and thriving.",
      image: 'https://placehold.co/400x400',
    },
    {
      name: "Emily Parker",
      rating: "3",
      comment: "Best aquarium shop in the area! Their customer service is exceptional and they have a wide variety of products.",
      image: 'https://placehold.co/400x400',
    },
    {
      name: "David Wilson",
      rating: "4",
      comment: "Very satisfied with my purchase. The team was professional and provided great advice for setting up my new aquarium.",
      image: 'https://placehold.co/400x400',
    },
    {
      name: "Sarah Johnson",
      rating: "4",
      comment: "Great selection of marine life and equipment. Staff was very knowledgeable and helpful. Would definitely shop here again.",
      image: 'https://placehold.co/400x400',
    },
    {
      name: "Mike Anderson",
      rating: "5",
      comment: "Outstanding experience with Sea Wonders. Their expertise in marine life is impressive. The fish I purchased are healthy and thriving.",
      image: 'https://placehold.co/400x400',
    },
    {
      name: "Emily Parker",
      rating: "3",
      comment: "Best aquarium shop in the area! Their customer service is exceptional and they have a wide variety of products.",
      image: 'https://placehold.co/400x400',
    },
    {
      name: "David Wilson",
      rating: "4",
      comment: "Very satisfied with my purchase. The team was professional and provided great advice for setting up my new aquarium.",
      image: 'https://placehold.co/400x400',
    }
  ];

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
