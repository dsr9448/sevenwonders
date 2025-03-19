import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-topbanner',
  imports: [NgFor],
  templateUrl: './topbanner.component.html',
  styleUrl: './topbanner.component.css'
})
export class TopbannerComponent {
 topbanner : { image: string, link: string }[] = [
    { image: "../../../assets/images/topbanners/1.jpg", link: "https://example.com/page1" },
    { image: "../../../assets/images/topbanners/2.jpg", link: "https://example.com/page2" },
    { image: "../../../assets/images/topbanners/3.jpg", link: "https://example.com/page3" },
    { image: "../../../assets/images/topbanners/4.jpg", link: "https://example.com/page4" },
  ]

}
