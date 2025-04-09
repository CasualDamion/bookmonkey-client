import {Routes} from '@angular/router';
import {BookComponent} from './components/book/book.component';
import {BookDetailComponent} from './components/book-detail/book-detail.component';
import {BookApiService} from './services/book-api.service';
import {confirmLeaveGuard} from './guards/confirm-leave.guard';

export const bookRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BookComponent,
      },
      {
        path: 'detail/:isbn',
        component: BookDetailComponent,
        canDeactivate: [confirmLeaveGuard],
      }
    ],
    providers: [
      BookApiService,
    ]
  }
];
