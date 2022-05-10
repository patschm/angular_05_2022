import { InjectionToken } from '@angular/core';

export interface IAppConfig {
  apiEndpoint: string;
}

export const APP_CONFIG = new InjectionToken<IAppConfig>('app.config');

export const API_CONFIG: IAppConfig = {
    apiEndpoint: 'https://localhost:5001/'
  };