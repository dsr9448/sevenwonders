import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://seven.wodo.digital';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getHomepageData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/homepage`);
  }
  getCategoryData(slug: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/category-api/${slug}`);
  }
  getSubCategoryData(slug: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/brands/${slug}`);
  }
  getProductDetails(productId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getproductdetails/${productId}`);
  }
  getWishlistData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/wishlist/448`);
  }
  addToWishlist(productId: string): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.baseUrl}/addToWishlist`, { user_id: '448', productId: productId }).subscribe(
        (response: any) => {
          if (response.message === 'Product already in wishlist') {
            this.snackBar.open('Product already in wishlist', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['snackbar-container'],
            });
          } else {
            this.snackBar.open('Product added to wishlist', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['snackbar-container'],
            });
          }
          observer.complete();
        },
        error => {
          observer.error(error);
        }
      );
    });
  }
  removeFromWishlist(productId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/wishlistRemove `, { user_id: '448', productId: productId });
  }
}
