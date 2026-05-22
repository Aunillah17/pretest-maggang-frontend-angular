import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Kita ganti import-nya dari 'toko-shell' menjadi relative path yang benar-benar pas atau any
import { CartService, Product } from './cart'; // sesuaikan dengan nama interface lo

@Component({
  selector: 'lib-catalog-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  // Di sini letak perbaikannya, pastikan nama file html & css-nya sesuai dengan yang ada di folder kamu
  templateUrl: './catalog-list.html',
  styleUrls: ['./catalog-list.css']
})
export class CatalogListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.http.get<Product[]>('/products.json').subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Gagal memuat data produk', err)
    });
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} berhasil ditambahkan ke keranjang!`);
  }
}