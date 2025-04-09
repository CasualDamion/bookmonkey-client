import {Routes} from '@angular/router';
import {BookComponent} from './components/book/book.component';
import {BookDetailComponent} from './components/book-detail/book-detail.component';

export const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'detail/:isbn',
    component: BookDetailComponent,
  }
]
