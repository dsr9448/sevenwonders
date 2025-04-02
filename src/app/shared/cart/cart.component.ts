import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cartservices';
import { IMAGE_PATHS } from '../constants/api-paths';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  imagePath = IMAGE_PATHS;
  constructor(public cartService: CartService) { }
  cartCount:number =0 ;
 selectedCurrency:string='AED';
  closeCart() {
    this.cartService.hideCart();
  }
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  updateQuantity(productId: number, change: number) {
    this.cartService.updateQuantity(productId, change);
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
