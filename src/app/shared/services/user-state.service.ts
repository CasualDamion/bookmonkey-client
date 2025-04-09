import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  isAuthenticated = true;
}
