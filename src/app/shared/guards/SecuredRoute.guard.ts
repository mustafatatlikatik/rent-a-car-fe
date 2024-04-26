import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const securedRouteGuard: CanActivateFn = (route, state) => {
  const redirectNotAuthorized = () => {
    const router = inject(Router);
    router.navigate(['/not-found']);
    return false;
  };

  if (!localStorage.getItem('token')) return redirectNotAuthorized();

  if (!localStorage.getItem('user_roles')) return redirectNotAuthorized();

  const userRoles = JSON.parse(localStorage.getItem('user_roles')!);
  const requiredUserRole = route.data['requiredUserRole'];
  if (!userRoles.includes(requiredUserRole)) return redirectNotAuthorized();

  return true;
};
