import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { getUser } from 'src/app/shared/authItems';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  constructor(private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router) { }

  oneBook: any | null = null
  user: any | null = null
  canBuy: boolean = true

  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.params['id'];
    this.user = getUser()

    this.bookService.getBook(bookId).subscribe({
      next: (book) => {
        this.oneBook = book
        if (this.oneBook.buyers.includes(this.user._id)) {
          this.canBuy = false
        }
      },
      error: (err) => {
        console.log(err);
        this.authService.errorMessage = 'Cant find the book!'
        this.router.navigate(['error'])
      }
    })
  }

  buyBook(bookId: string, userId: string) {
   
    this.bookService.buyBook(bookId, userId).subscribe({
      next: (book) => { },
      error: (err) => {
        console.log(err.error.message);
      }
    })
    this.router.navigate(['/'])
  }

}
