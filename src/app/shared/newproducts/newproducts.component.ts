import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-newproducts',
  imports: [NgFor],
  templateUrl: './newproducts.component.html',
  styleUrl: './newproducts.component.css'
})
export class NewproductsComponent {
  newproduct : string[] = [
    "../../../assets/images/newproduct/1.png",
    "../../../assets/images/newproduct/2.png",
  ]
}
