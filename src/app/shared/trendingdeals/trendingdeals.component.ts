import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trendingdeals',
  imports: [NgFor,RouterModule],
  templateUrl: './trendingdeals.component.html',
  styleUrl: './trendingdeals.component.css'
})
export class TrendingdealsComponent implements OnInit {
  @Input() dealsdata: any[]= [];




  ngOnInit(): void {
    this.dealsdata = this.dealsdata;
  }
}
