import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-new',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    isbn: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    subtitle: new FormControl('', [Validators.required]),
    abstract: new FormControl('', [Validators.required]),
  });

  protected submit(event: SubmitEvent) {
    console.log(event);
    console.log(this.form);
  };
}
