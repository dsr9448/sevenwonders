import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeadingComponent } from "../heading/heading.component";

@Component({
  selector: 'app-deals',
  imports: [HeadingComponent, NgFor],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {
  @Input() title1: string = '';
  @Input() title2: string = '';
  @Input() href: string = '';
  @Input() buttonText: string = '';
  dealsData: any[] = [
    {
      image:"../../../assets/images/fastselling/1.png",
      sale:"30% off",
      title:"On all products"
    },
    {
      image:"../../../assets/images/fastselling/2.png",
      sale:"30% off",
      title:"On all products"
    },
    {
      image:"../../../assets/images/fastselling/3.png",
      sale:"30% off",
      title:"On all products"
    },
    {
      image:"../../../assets/images/fastselling/4.png",
      sale:"30% off",
      title:"On all products"
    } ,
    {
      image:"../../../assets/images/fastselling/5.png",
      sale:"30% off",
      title:"On all products"
    },
    {
      image:"../../../assets/images/fastselling/1.png",
      sale:"30% off",
      title:"On all products"
    }
  ];
  ngOnInit(): void {
  }
}
