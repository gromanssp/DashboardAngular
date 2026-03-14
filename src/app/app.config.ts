import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appRoutes } from './app.router';
import { provideNgToast } from 'ng-angular-popup';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(appRoutes), provideNgToast(), provideAnimationsAsync()]
};

export const URL_SERVICIOS = 'http://localhost:3000';