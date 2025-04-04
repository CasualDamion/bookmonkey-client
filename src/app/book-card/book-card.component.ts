import {Component, input, output} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  customStyle = {
    color: 'red',
    fontSize: '60px',
  };
  paragraphClass = 'highlight'
  content = input.required<Book>();
  detailClick = output<Book>();

  handleDetailClick(click: MouseEvent): void {
    click.preventDefault();
    this.detailClick.emit(this.content());
    console.log('Click Details-Link:', click);
  }
}
