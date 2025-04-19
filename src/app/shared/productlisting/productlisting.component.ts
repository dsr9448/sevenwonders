import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // includes NgIf, NgFor
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IMAGE_PATHS } from '../constants/api-paths';
import { CartService } from '../../services/cartservices';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productlisting',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css']
})
export class ProductlistingComponent implements OnInit {
  @Input() productdata: any;
  bannerimage: any[] = [];
  productlist: any[] = [];
  imagePath = IMAGE_PATHS.shopbycat;

  // Filters
  priceRange = 1000000;
  selectedBrands: string[] = [];
  selectedRatings: string[] = [];
  inStockOnly = false;
  outOfStockOnly = false;

  // Rating ranges
  ratingRanges = [
    { label: 'Above 3 Stars', min: 3 },
    { label: 'Above 4 Stars', min: 4 },
    { label: '5 Stars', min: 5 }
  ];

  // Unique brands
  get uniqueBrands(): string[] {
    return [...new Set(this.productlist.map(product => product.brand))];
  }

  // Filtered result
  get filteredProducts() {
    return this.productlist.filter(product => {
      const priceMatch = product.price <= this.priceRange;
      const brandMatch = this.selectedBrands.length === 0 || this.selectedBrands.includes(product.brand);
      const ratingMatch = this.selectedRatings.length === 0 ||
        this.selectedRatings.some(range => {
          const minRating = this.ratingRanges.find(r => r.label === range)?.min || 0;
          return product.rating >= minRating;
        });
      const stockMatch = !this.inStockOnly || product.quantity > 0;
      const outOfStockMatch = !this.outOfStockOnly || product.quantity === 0;
      return priceMatch && brandMatch && ratingMatch && stockMatch && outOfStockMatch;
    });
  }

  toggleBrand(brand: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedBrands.push(brand);
    } else {
      this.selectedBrands = this.selectedBrands.filter(b => b !== brand);
    }
  }

  toggleRating(range: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedRatings.push(range);
    } else {
      this.selectedRatings = this.selectedRatings.filter(r => r !== range);
    }
  }
  constructor(private cartService: CartService, private apiService: ApiService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.productdata = this.productdata;
    this.bannerimage = this.productdata.bannerImage;
    this.productlist = this.productdata.productlist;


  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.cartService.showCart();
  }
navigateToProduct(product: any) {
  this.router.navigate(['/product/', product.slug]);
}


  toggleWishlist(product: any): void {
    this.apiService.addToWishlist(product.id).subscribe((data) => {
      console.log(data);
      this.snackBar.open('Product added to wishlist', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['snackbar-container'],
      });
    });
  }// Implement wishlist functionality
  
}
