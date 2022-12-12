import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/books/book.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookList: IBook[] | null = [];

  constructor(private bookService: BookService) { }

  ifBooks: boolean = false;

  ngOnInit(): void {
    this.bookService.loadBooks().subscribe({
      next: (books) => {
        this.bookList = books
        if (this.bookList.length > 0) {
          this.ifBooks = true;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
