import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IBook } from 'src/app/shared/interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  oneBook: IBook | null = null
  bookId: string = '';

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private authservice: AuthService
    ) { }

  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.params['id'];
    this.bookId = bookId;

    this.bookService.getBook(bookId).subscribe({
      next: (book) => { 
        this.oneBook = book
      },
      error: (err) => {
        console.log(err);
        this.authservice.errorMessage = 'Book does not exist!'
        this.router.navigate(['error'])
      }
    })
  }

  updateHandler(form: NgForm) {
    const formData = {
      title: form.value.title,
      author: form.value.author,
      description: form.value.description,
      imageUrl: form.value.imageUrl,
      genre: form.value.genre,
      price: form.value.price,
    }
    
    if (form.invalid) { return; }
    
    this.bookService.updateBook(formData, this.bookId).subscribe({
      next: (book) => {
        // if (!book) { return }
        this.router.navigate(['/auth/my-books'])
      },
      error: (err) => {
        console.log(err.error.message);
        this.authservice.errorMessage = 'Cant find the book!';
        this.router.navigate(['error'])
      }
    })

  }

}
