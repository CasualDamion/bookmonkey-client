import {Pipe, PipeTransform} from '@angular/core';
import {Book} from '../..';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], searchTerm: string): Book[] {
    if (searchTerm === '') {
      return books;
    }
    return books.filter(
      book => filterBooks(book, searchTerm.toLowerCase()));
  }
}

function filterBooks(book: Book, searchTerm: string): boolean {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.entries(book).some(([_, value]) => {
    if (typeof value === 'string') {
      return value.toLowerCase().includes(searchTerm);
    }
    return false;
  })
}
