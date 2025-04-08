import {Component, inject, OnInit} from '@angular/core';
import {BookApiService} from '../../services/book-api.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../models/book';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent implements OnInit {
  private readonly bookApi = inject(BookApiService);
  protected readonly route = inject(ActivatedRoute);

  customStyle = {
    color: 'red',
    fontSize: '60px',
  };
  book: Book | undefined;

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.bookApi.getBookByIsbn(params['isbn'])
        .subscribe(book => this.book = book))
  }

}
