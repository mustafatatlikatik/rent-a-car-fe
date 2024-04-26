import { HttpResponse, type HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loadingOverlayInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = document.getElementById('spinner');
  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        hideSpinner(spinner);
      }
      showSpinner(spinner);
    })
  );
}

function showSpinner(spinner: HTMLElement | null) {
  if (spinner) {
    spinner.setAttribute('class', 'container d-flex justify-content-center');
  }
}

function hideSpinner(spinner: HTMLElement | null) {
  if (spinner) {
    spinner.setAttribute('class', 'container d-none');
  }
}
