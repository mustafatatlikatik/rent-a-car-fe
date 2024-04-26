import { HttpResponse, type HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const timeInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime = Date.now();
  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        const endTime = Date.now();
        const duration = endTime - startTime;

        const url = req.url;
        console.log(`HTTP İstek Tamamlandı: ${url} Süre: ${duration}ms`);
      }
    })
  )
};
