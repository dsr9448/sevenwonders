import { Component ,Input,OnInit} from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-newproducts',
  imports: [NgFor],
  templateUrl: './newproducts.component.html',
  styleUrl: './newproducts.component.css'
})
export class NewproductsComponent implements OnInit {
  @Input() newproduct : string[] = [];
  @Input() isproduct : boolean = false;
  ngOnInit(): void {
    this.newproduct = this.newproduct;
    this.isproduct = this.isproduct;
  }
  
}
