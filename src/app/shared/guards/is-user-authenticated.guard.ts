import {CanMatchFn} from '@angular/router';
import {UserStateService} from '../services/user-state.service';
import {inject} from '@angular/core';

export const isUserAuthenticatedGuard: CanMatchFn = () => {
  const userService = inject(UserStateService);
  return userService.isAuthenticated;
};
