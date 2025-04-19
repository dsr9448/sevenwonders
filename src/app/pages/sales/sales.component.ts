import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductbreadcrumbComponent } from '../../shared/productbreadcrumb/productbreadcrumb.component';
import { ApiService } from '../../services/api.service';
import { IMAGE_PATHS } from '../../shared/constants/api-paths';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sales',
  imports: [ProductbreadcrumbComponent,CommonModule,RouterModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent implements OnInit {
  salesData: any;
  imagePath = IMAGE_PATHS.sales;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSalesData().subscribe((data) => {
      this.salesData = data;
    });
  }
}
