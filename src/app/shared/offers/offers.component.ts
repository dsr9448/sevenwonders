import { Component, OnInit, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-offers',
  imports: [NgFor],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  @Input() offers: any[]= [];
  
  ngOnInit(): void {
    this.offers = this.offers;
  }
}
