import {Component, inject} from '@angular/core';
import {InputComponent} from '../../../shared/input/input.component';
import {BookCardComponent} from '../book-card/book-card.component';
import {BookFilterPipe} from '../../pipes/book-filter/book-filter.pipe';
import {Book} from '../..';
import {BookApiService} from '../../services/book-api.service';

@Component({
  selector: 'app-book',
  imports: [
    BookCardComponent,
    BookFilterPipe,
    InputComponent,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  providers: [
    BookApiService
  ],
})
export class BookComponent {
  private readonly bookApi = inject(BookApiService);
  bookSearchTerm = '';
  books: Book[] = [];

  constructor() {
    this.bookApi
      .getAll()
      .subscribe({
          next: books => this.books = books
        }
      );
  }

  goToBookDetails(event: Book): void {
    console.log('Navigate to book details, soon...')
    console.table(event);
    // navigate somewhere ...
  }
}
