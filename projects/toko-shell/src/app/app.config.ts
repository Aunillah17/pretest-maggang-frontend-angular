import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Kita paksa Angular mendeteksi perubahan lewat Zone bawaan secara murni
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};