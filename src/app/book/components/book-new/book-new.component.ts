import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Book} from '../../models/book';

type IForm<T> = {
  [Key in keyof T]: FormControl<T[Key]>;
}

@Component({
  selector: 'app-book-new',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  protected form: FormGroup<IForm<Book>> = this.formBuilder.group({
    'isbn': ['', [Validators.required]],
    'author': ['', [Validators.required]],
    'title': ['', [Validators.required]],
    'subtitle': [''],
    'abstract': [''],
    'publisher': [''],
    'numPages': [0],
    'price': [''],
    'cover': [''],
    'link': [''],
  });

  protected create() {
    console.log(this.form);
  };
}
