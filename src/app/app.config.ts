import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { FronteggAppModule } from '@frontegg/angular';
import { FronteggAppOptions } from '@frontegg/types';

import { routes } from './app.routes';

const fronteggConfig: FronteggAppOptions = {
  contextOptions: {
    baseUrl: 'https://app-tkyztdfvr4u7.frontegg.com',
    clientId: '064e6075-72a4-4430-bc70-7fc5e9ab31fd',
  },
  authOptions: {
    // keepSessionAlive: true // Uncomment this in order to maintain the session alive
  },
  hostedLoginBox: true,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(FronteggAppModule.forRoot(fronteggConfig)),
  ],
};
