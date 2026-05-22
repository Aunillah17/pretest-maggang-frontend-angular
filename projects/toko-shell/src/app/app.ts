import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
  <nav class="bg-teal-700 text-white p-4 shadow-lg">
    <div class="max-w-6xl mx-auto flex gap-6">
      <a routerLink="/" class="font-bold hover:text-teal-200">🏪 Katalog</a>
      <a routerLink="/cart" class="font-bold hover:text-teal-200">🛒 Keranjang</a>
    </div>
  </nav>
  <main class="bg-white min-h-screen">
    <router-outlet></router-outlet>
  </main>
`
})
export class AppComponent {}