import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService, CartItem } from './cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.css']
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  private cartSubscription!: Subscription;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart$.subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.totalPrice = this.cartItems.reduce((total: number, item: CartItem) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  onCheckout(): void {
    if (this.cartItems.length === 0) {
      alert('Keranjang kamu masih kosong, nih!');
      return;
    }
    alert('Checkout Berhasil! Transaksi kamu telah dicatat.');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}