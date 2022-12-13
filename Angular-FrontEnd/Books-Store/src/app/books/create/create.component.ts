import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
  }
  
  errors: string | undefined = undefined;

  createHandler(form: NgForm) {
    const formData = {
      title: form.value.title,
      author: form.value.author,
      description: form.value.description,
      imageUrl: form.value.imageUrl,
      genre: form.value.genre,
      price: form.value.price,
    }

    this.bookService.createBook(formData).subscribe({
      next: (book) => { console.log() },
      error: (err) => {
        console.log(err.error.error);
        this.errors = err.error.error
      }
    })
    this.router.navigate(['/'])

  }

}
