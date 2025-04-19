import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://seven.wodo.digital';

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private authService: AuthService, private router: Router) { }

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
    const userData = this.authService.getUserData();
    return this.http.get(`${this.baseUrl}/wishlist/${userData.uid}`);
  }
  addToWishlist(productId: string): Observable<any> {
    const userData = this.authService.getUserData();
    if (!userData) {
      this.router.navigate(['/signin']);
      return new Observable(observer => observer.complete());
    }
    return this.http.post(`${this.baseUrl}/addToWishlist`, { user_id: userData.uid, productId: productId });
  }
  removeFromWishlist(productId: string): Observable<any> {
    const userData = this.authService.getUserData();
    return this.http.post(`${this.baseUrl}/wishlistRemove `, { user_id: userData.uid, productId: productId });
  }

  signup(data: {
    email: string;
    fname: string;
    lname: string;
    password: string;
    mobile: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/store/doregister`, data);
  }

  login(data: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/store/dologin`, data);
  }

  resetPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/store/doresetpassword`, { email });
  }
  writeReview(data: {
    product_id: string;
    user_id: string;
    rating: string;
    title: string;
    review: string;
  }): Observable<any> {
    // const userData = this.authService.getUserData();
    return this.http.post(`${this.baseUrl}/add-product-review`, {
      "product_id": data.product_id,
      "user_id": data.user_id,
      "rating": data.rating,
      "title": data.title,
      "review": data.review 
    });
  }
  getSalesData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sales`);
  }
  getSalesDetails(slug: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/sale/${slug}`);
  }
}
