import { Component,OnInit,Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgIf,NgFor } from '@angular/common';
@Component({
  selector: 'app-breadcrumb',
  imports: [NgIf,NgFor,CarouselModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
  @Input() category: string = '';
  @Input() subcategory: string = '';
  @Input() bannerimage: string = '';

  @Input() items: any[] = [];
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
    this.category = this.category;
    this.subcategory = this.subcategory;
    this.bannerimage = this.bannerimage;
    this.items = this.items;
  }

}
