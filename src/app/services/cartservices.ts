import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
interface CartItem {
  id: number;
  brand: string;
  name: string;
  image: string;
  price: number;
  sprice: number;
  quantity: number;
  rating: number;
  sale: boolean;
  expressDelivery: boolean;
  standardDelivery: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private snackBar: MatSnackBar) { }
  private isCartVisibleSubject = new BehaviorSubject<boolean>(false);
  isCartVisible$ = this.isCartVisibleSubject.asObservable();

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  toggleCart() {
    this.isCartVisibleSubject.next(!this.isCartVisibleSubject.value);
  }

  showCart() {
    this.isCartVisibleSubject.next(true);
  }

  hideCart() {
    this.isCartVisibleSubject.next(false);
  }

  addToCart(product: CartItem) {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      this.snackBar.open('Item already in cart', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['snackbar-container'],


      });

      this.hideCart();

    } else {
      // If item is new, add to cart
      this.cartItemsSubject.next([...currentItems, { ...product, quantity: 1 }]);

    }
  }

  updateQuantity(productId: number, change: number) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0);

    this.cartItemsSubject.next(updatedItems);
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(item => item.id !== productId);
    this.cartItemsSubject.next(updatedItems);
  }

  getCartCount(): number {
    return this.cartItemsSubject.value.reduce((total, item) => total + item.quantity, 0);
  }

  getCartTotal(): number {
    return this.cartItemsSubject.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}

