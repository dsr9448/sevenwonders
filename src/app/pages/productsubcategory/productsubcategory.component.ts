import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/BreadcrumbComponent';
import { CategoryComponent } from '../../shared/category/category.component';
import { ProductlistingComponent } from '../../shared/productlisting/productlisting.component';
import { HeadingComponent } from "../../shared/heading/heading.component";
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productsubcategory',
  imports: [ CommonModule, BreadcrumbComponent,CategoryComponent,ProductlistingComponent,HeadingComponent],
  templateUrl: './productsubcategory.component.html',
  styleUrl: './productsubcategory.component.css'
})
export class ProductsubcategoryComponent implements OnInit {
  
  subcategoryData: any;
  slug: string = '';
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
    });
   
    this.api.getSubCategoryData(this.slug).subscribe((res) => {
      this.subcategoryData = res?.brandsdata || {};

    });
  }
}
