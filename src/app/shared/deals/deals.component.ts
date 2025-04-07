import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeadingComponent } from "../heading/heading.component";
import { IMAGE_PATHS } from "../constants/api-paths";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-deals',
  imports: [HeadingComponent, NgFor, RouterModule],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent implements OnInit {
  @Input() title1: string = '';
  @Input() title2: string = '';
  @Input() href: string = '';
  @Input() buttonText: string = '';
  @Input() isHome: boolean = false;
  @Input() isWhite: boolean = false;
  @Input() dealsData: any[] = [];
  imagePath = IMAGE_PATHS.banners;
  ngOnInit(): void {
    this.title1 = this.title1;
    this.title2 = this.title2;
    this.href = this.href;
    this.buttonText = this.buttonText;
    this.dealsData = this.dealsData;
    this.isHome = this.isHome;
    this.isWhite = this.isWhite;
  }
}
