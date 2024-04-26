
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './shared/interceptor/auth.interceptor';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './shared/interceptor/error.interceptor';
import { timeInterceptor } from './shared/interceptor/time.interceptor';
import { loadingOverlayInterceptor } from './shared/interceptor/loading-overlay.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor, timeInterceptor, loadingOverlayInterceptor])), //HttpClient'ı kullanabilmek için
    provideToastr(),
    provideAnimations(),
  ]
};
