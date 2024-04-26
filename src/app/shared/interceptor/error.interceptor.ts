import type { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        toastr.error('Unauthorized request', 'Error');
      } else {
        toastr.error('Bir hata oluştu', 'Error');
      }
      return throwError(() => new Error('Bir hata oluştu'));
    })
  );
};
