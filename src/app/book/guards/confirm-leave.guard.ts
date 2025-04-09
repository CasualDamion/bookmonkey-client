import {CanDeactivateFn} from '@angular/router';
import {BookDetailComponent} from '../components/book-detail/book-detail.component';

export const confirmLeaveGuard: CanDeactivateFn<BookDetailComponent> = (component) => {
  const additionalInformation = component?.book?.title || '';
  return window.confirm('Do you really want to leave ' + additionalInformation + '?');
}
