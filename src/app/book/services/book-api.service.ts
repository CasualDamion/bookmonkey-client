import { Injectable } from '@angular/core';
import {Book} from '../models/book';

@Injectable()
export class BookApiService {

  book: Book = {
    isbn: '978-3-16-148410-0',
    title: 'How to win friends',
    author: 'Dale Carnegie',
    link: 'Details',
    abstract: 'How to Win Friends and Influence ...',
  };
  book2: Book = {
    isbn: '975.2.15.887954-5',
    title: 'Moby Dick',
    author: 'Herman Melville',
    link: 'Details',
    abstract: 'Ein Buch...',
  }
  book3: Book = {
    isbn: '978-1-59327-584-6',
    title: 'The Willpower Instinct: How Self-Control Works ...',
    author: 'Kelly McGonigal',
    link: 'Details',
    abstract: 'Based on Stanford University',
  }
  book4: Book = {
    isbn: '978-0-123456-47-2',
    title: 'Start with WHY',
    author: 'Simon Sinek',
    link: 'Details',
    abstract: "START WITH WHY shows that the leaders who've ...",

  }

  books: Book[] = [this.book, this.book2, this.book3, this.book4];

  getAll(): Book[] {
    return this.books;
  }
}
