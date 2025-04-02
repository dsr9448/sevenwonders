import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Input } from '@angular/core';
import { IMAGE_PATHS } from '../constants/api-paths';
@Component({
  selector: 'app-brands',
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent  implements OnInit{
  @Input() brandsData: any[] = [];
  imagePath = IMAGE_PATHS;
  // brandsData = [
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (1).jpg'
  //   },
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (2).jpg'
  //   },
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (3).jpg'
  //   },
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (4).jpg'
  //   },
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (5).jpg'
  //   },
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (6).jpg'
  //   },
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (7).jpg'
  //   },
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (8).jpg'
  //   },
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (9).jpg'
  //   },
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (10).jpg'
  //   },
  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (11).jpg'
  //   },

  //   {
  //     link: '',
  //     image: '../../../assets/images/brands/brands (9).jpg'
  //   },

  // ]
  ngOnInit(): void {
    this.brandsData = this.brandsData;
  }
}
