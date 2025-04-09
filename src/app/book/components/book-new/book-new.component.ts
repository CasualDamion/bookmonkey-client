import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Book} from '../../models/book';
import {BookApiService} from '../../services/book-api.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  private service = inject(BookApiService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

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
    const book: Book = this.form.getRawValue();
    this.service.create(book).subscribe({
      complete: () => {
        this.router.navigate(['..', 'detail', book.isbn],
          {relativeTo: this.route});
      }
    })
  };
}
