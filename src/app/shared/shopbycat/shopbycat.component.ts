import { Component,Input ,OnInit } from '@angular/core';
import { NgFor } from '@angular/common'; import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-shopbycat',
  imports: [NgFor,RouterModule],
  templateUrl: './shopbycat.component.html',
  styleUrl: './shopbycat.component.css'
})
export class ShopbycatComponent implements OnInit {
  @Input() shopbycatData: any[] = [];
  ngOnInit(): void {
    this.shopbycatData = this.shopbycatData;
  }
}
