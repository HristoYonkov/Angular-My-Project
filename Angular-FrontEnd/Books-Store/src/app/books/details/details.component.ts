import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  constructor( private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService) { }

  oneBook: any | null = null
  // user: any | null = null;

  get isLoggedIn() {
    return this.authService.isLogegdIn
  };

  get user() {
    return this.authService.user
  }

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

}
