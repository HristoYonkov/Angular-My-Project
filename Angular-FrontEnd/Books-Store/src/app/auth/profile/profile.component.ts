import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/books/book.service';
import { getUser } from 'src/app/shared/authItems';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {

  bookList: IBook[] | null = [];

  constructor(private bookService: BookService) { }

  ifBooks: boolean = false;
  user: any | null;

  ngOnInit(): void {
    this.user = getUser()
    this.bookService.buyedBooks().subscribe({
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
