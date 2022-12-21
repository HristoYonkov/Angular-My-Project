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

  bookList: IBook[] = [];
  searchResult = <any>[];
  searchType: string = 'Title';

  constructor(
    private bookService: BookService,
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    setTimeout(() => {

      this.bookService.loadBooks().subscribe({
        next: (books) => {
          this.bookList = books
          this.searchResult = books
        },
        error: (err) => {
          console.log(err);
          this.authService.errorMessage = 'Server is crashed!'
          this.router.navigate(['error'])
        }
      })

    }, 300) 
  }

  typeHandler() {
    if (this.searchType === 'Title') {
      this.searchType = 'Genre';
    } else {
      this.searchType = 'Title'
    }
  }
  
  searchHandler(search: string) {
    this.bookList = [];
    
    if (search !== '') {
      this.searchResult?.forEach((book: any) => {
        let title = book.title.toLowerCase()
        let genre = book.genre.toLowerCase()
        
        if (this.searchType === 'Genre') {
          if (genre.startsWith(search.toLowerCase())) {
            this.bookList.push(book)
          }
          
        } else {
          if (title.startsWith(search.toLowerCase())) {
            this.bookList.push(book)
          }
        }
      })
      
    } else {
      this.bookList = this.searchResult;
    }
  }

}
