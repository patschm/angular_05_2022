import { AppConfig } from './app-config';
export { AppConfig } from './app-config';
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const API_CONFIG: AppConfig = {
    apiEndpoint: 'https://localhost:5001/'
  };