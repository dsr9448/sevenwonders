import { Component, OnInit } from '@angular/core';
import { ProductbreadcrumbComponent } from "../../shared/productbreadcrumb/productbreadcrumb.component";
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IMAGE_PATHS } from '../../shared/constants/api-paths';
import { CartService } from '../../services/cartservices';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-wishlist',
  imports: [ProductbreadcrumbComponent, CommonModule, RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  imagePath = IMAGE_PATHS.shopbycat;
  constructor(private apiService: ApiService, private cartService: CartService, private snackBar: MatSnackBar, private authService: AuthService, private router: Router) { }
  wishlistData: any;
  ngOnInit(): void {
    const userData = this.authService.getUserData();
    if (userData) {
      this.apiService.getWishlistData().subscribe((data) => {
        this.wishlistData = data;
      });
    } else {
      this.router.navigate(['/signin']);
    }
  } addToCart(product: any) {
    this.cartService.addToCart(product);
    this.cartService.showCart();
  }

  toggleWishlist(product: any): void {
    this.apiService.removeFromWishlist(product.id).subscribe((data) => {
      this.apiService.getWishlistData().subscribe((data) => {
        this.wishlistData = data;
      });
  
      this.snackBar.open('Product removed from wishlist', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['snackbar-container'],
      });



    });

  }
}
