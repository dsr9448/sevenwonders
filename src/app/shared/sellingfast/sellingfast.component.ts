import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-sellingfast',
  imports: [NgFor],
  templateUrl: './sellingfast.component.html',
  styleUrl: './sellingfast.component.css'
})
export class SellingfastComponent implements OnInit {

  sellingFastData: any[] = [
    {
      image: "../../../assets/images/fastselling/1.png",
      sale: "30% off",
      title: "On all products"
    },
    {
      image: "../../../assets/images/fastselling/2.png",
      sale: "30% off",
      title: "On all products"
    },
    {
      image: "../../../assets/images/fastselling/3.png",
      sale: "30% off",
      title: "On all products"
    },
    {
      image: "../../../assets/images/fastselling/4.png",
      sale: "30% off",
      title: "On all products"
    },
    {
      image: "../../../assets/images/fastselling/5.png",
      sale: "30% off",
      title: "On all products"
    }, {
      image: "../../../assets/images/fastselling/1.png",
      sale: "30% off",
      title: "On all products"
    }
  ];
  ngOnInit(): void {
  }

}
