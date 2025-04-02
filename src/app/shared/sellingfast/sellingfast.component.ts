import { Component, OnInit, Input } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IMAGE_PATHS } from '../constants/api-paths';
@Component({
  selector: 'app-sellingfast',
  imports: [CommonModule, RouterModule],
  templateUrl: './sellingfast.component.html',
  styleUrl: './sellingfast.component.css'
})
export class SellingfastComponent implements OnInit {

@Input() sellingFastData: any;
imagePath = IMAGE_PATHS.banners;
  ngOnInit(): void {
    this.sellingFastData = this.sellingFastData;
  }

}
