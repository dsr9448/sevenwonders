import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-offers',
  imports: [NgFor],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  offers: { image: string, link: string }[] = [
    { image: "../../../assets/images/Offers/1.jpg", link: "https://example.com/page1" },
    { image: "../../../assets/images/Offers/2.jpg", link: "https://example.com/page2" },
    { image: "../../../assets/images/Offers/3.jpg", link: "https://example.com/page3" },
    { image: "../../../assets/images/Offers/4.jpg", link: "https://example.com/page4" },
  ]
}
