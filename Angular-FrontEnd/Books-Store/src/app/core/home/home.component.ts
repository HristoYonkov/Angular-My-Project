import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BookService } from 'src/app/books/book.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookList: IBook[] | null = [];
  searchResult = <any>[];
  searchType: string = 'Title';

  constructor(
    private bookService: BookService,
    private authService: AuthService,
    private router: Router,
    ) { }

  ifBooks: boolean = false;

  ngOnInit(): void {
    this.bookService.loadBooks().subscribe({
      next: (books) => {
        console.log(books);
        
        this.bookList = books
        if (this.bookList.length > 0) {
          this.ifBooks = true;
        }
      },
      error: (err) => {
        console.log(err);
        this.authService.errorMessage = 'Server is crashed!'
        this.router.navigate(['error'])
      }
    })
  }

  typeHandler() {
    if (this.searchType === 'Title') {
      this.searchType = 'Genre';
    } else {
      this.searchType = 'Title'
    }
  }
  
  searchHandler(search: string) {
    this.searchResult = <any>[];
    if (search !== '') {
      this.bookList?.forEach((book) => {
        let title = book.title.toLocaleLowerCase()
        let genre = book.genre.toLocaleLowerCase()
        if (this.searchType === 'Genre') {
          if (genre.startsWith(search.toLocaleLowerCase())) {
            this.searchResult.push(book)
          }

        } else {
          if (title.startsWith(search.toLocaleLowerCase())) {
            this.searchResult.push(book)
          }
        }
      })
      
    }
  }

}
