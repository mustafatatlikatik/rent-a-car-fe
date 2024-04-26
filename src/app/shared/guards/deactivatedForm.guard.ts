import type { CanDeactivateFn } from '@angular/router';

export const deactivatedFormGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if (confirm("Girmiş olduğunuz değişiklikler kaybolacak, Devam etmek istiyor musunuz?")) {
    return true;
  } else {
    return false;
  }
};
