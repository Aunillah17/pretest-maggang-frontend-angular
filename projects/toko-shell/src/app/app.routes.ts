import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./catalog-list').then(m => m.CatalogListComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart-page').then(m => m.CartPageComponent)
  }
];