import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/shared/interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  oneBook: IBook | null = null

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.params['id'];
    
    this.bookService.getBook(bookId).subscribe({
      next: (book) => {
        console.log(book);
        
        this.oneBook = book
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  updateHandler(form: NgForm) {


    if (form.invalid) { return; }

    
  }

}
