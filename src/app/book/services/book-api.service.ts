import {inject, Injectable} from '@angular/core';
import {Book} from '../models/book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class BookApiService {

  private baseUrl = 'http://localhost:4730/books/';
  private httpClient = inject(HttpClient);

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.httpClient.get<Book>(this.baseUrl + isbn);
  }
}
