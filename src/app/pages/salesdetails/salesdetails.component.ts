import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductbreadcrumbComponent } from '../../shared/productbreadcrumb/productbreadcrumb.component';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ProductlistingComponent } from '../../shared/productlisting/productlisting.component';
import { IMAGE_PATHS } from '../../shared/constants/api-paths';
@Component({
  selector: 'app-salesdetails',
  imports: [ProductbreadcrumbComponent, CommonModule,ProductlistingComponent],
  templateUrl: './salesdetails.component.html',
  styleUrl: './salesdetails.component.css'
})
export class SalesdetailsComponent implements OnInit {
  salesDetails: any;
  slug!: string;
  image: string = IMAGE_PATHS.sales;
  constructor(private route: ActivatedRoute, private apiService: ApiService,) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.apiService.getSalesDetails(this.slug).subscribe((data) => {
        this.salesDetails = data;
      });
    });
  }
}
