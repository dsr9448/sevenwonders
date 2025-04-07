import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IMAGE_PATHS } from '../constants/api-paths';

@Component({
  selector: 'app-trendingdeals',
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './trendingdeals.component.html',
  styleUrl: './trendingdeals.component.css'
})
export class TrendingdealsComponent implements OnInit {
  @Input() dealsdata: any;
  imagePath = IMAGE_PATHS;

  ngOnInit(): void {
    this.dealsdata = this.dealsdata;
  }
}
