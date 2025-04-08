import {Component, effect, inject} from '@angular/core';
import {InputComponent} from '../../../shared/components/input/input.component';
import {BookCardComponent} from '../book-card/book-card.component';
import {BookFilterPipe} from '../../pipes/book-filter/book-filter.pipe';
import {Book} from '../..';
import {BookApiService} from '../../services/book-api.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [
    BookCardComponent,
    InputComponent,
    BookFilterPipe,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  providers: [
    BookApiService
  ],
})
export class BookComponent {
  private readonly bookApi = inject(BookApiService);
  private readonly router = inject(Router);

  bookSearchTerm = '';
  books = toSignal(this.bookApi.getAll(), {initialValue: []});

  constructor() {
    effect(() => {
      console.log('Books loaded: ', this.books().length);
    })
  }

  goToBookDetails(book: Book): void {
    console.table(book);
    this.router.navigate(['/books', 'detail', book.isbn]);
  }

}
