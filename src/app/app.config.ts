import {ApplicationConfig} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {routes} from './app.routes';
import {provideRouter} from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  ]
};
