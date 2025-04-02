import { Component ,Input,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IMAGE_PATHS } from '../constants/api-paths';
@Component({
  selector: 'app-newproducts',
  imports: [CommonModule, RouterModule],
  templateUrl: './newproducts.component.html',
  styleUrl: './newproducts.component.css'
})
export class NewproductsComponent implements OnInit {
  @Input() newproduct : any;
  @Input() isproduct : boolean = false;
  imagePath = IMAGE_PATHS.banners;
  ngOnInit(): void {
    this.newproduct = this.newproduct;
    this.isproduct = this.isproduct;
  }
  
}
