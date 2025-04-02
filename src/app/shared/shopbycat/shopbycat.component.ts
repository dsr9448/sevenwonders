import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IMAGE_PATHS } from '../constants/api-paths';
@Component({
  selector: 'app-shopbycat',
  imports: [RouterModule, CommonModule],
  templateUrl: './shopbycat.component.html',
  styleUrl: './shopbycat.component.css'
})
export class ShopbycatComponent implements OnInit {
  @Input() shopbycatData: any;
  imagePath = IMAGE_PATHS.shopbycat;
  ngOnInit(): void {
    this.shopbycatData = this.shopbycatData;
  }
}
