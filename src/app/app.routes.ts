import {AboutComponent} from './about/components/about.component';
import {BookComponent} from './book/components/book/book.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'books',
    component: BookComponent,
  }
];
