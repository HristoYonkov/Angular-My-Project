import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { getUser } from 'src/app/shared/authItems';
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

  user: any | null = null
  
  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.params['id'];
    this.user = getUser()
    console.log(this.user);
    
    this.bookService.getBook(bookId).subscribe({
      next: (book) => {
        
        this.oneBook = book
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  buyBook(bookId: string, userId: string) {
    console.log('CLICK');
    this.bookService.buyBook(bookId, userId)
    
  }

}
