import type { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //Http isteği gönderilmeden önce araya giriyoruz

  const token = localStorage.getItem('token') ?? '';
  const newReq = req.clone({
    headers: req.headers.set('Authorization', token), // Header'a token'ı oluşturuyoruz
  }
  ); // Klonlayarak yeni bir referans oluşturuyoruz

  return next(newReq)
};
