import {AboutComponent} from './about/components/about.component';
import {Routes} from '@angular/router';
import {isUserAuthenticatedGuard} from './shared/guards/is-user-authenticated.guard';

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
    loadChildren: () => import('./book/book.routes')
      .then(m => m.bookRoutes),
    canMatch: [isUserAuthenticatedGuard]
  },
];
