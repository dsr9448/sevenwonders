import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productbreadcrumb',
  imports: [RouterLink, CommonModule],
  templateUrl: './productbreadcrumb.component.html',
  styleUrl: './productbreadcrumb.component.css'
})
export class ProductbreadcrumbComponent {
  @Input() category: string = '';
  @Input() subcategory: string = '';
  @Input() productName: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
