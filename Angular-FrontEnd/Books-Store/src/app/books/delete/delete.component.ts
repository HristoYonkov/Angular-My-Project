import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private router: Router,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }


  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.params['id'];

    this.bookService.deleteBook(bookId).subscribe({
      next: (book) => { },
      error: (err) => {
        console.log(err);
        this.authService.errorMessage = 'Can\'t delete the book!'
        this.router.navigate(['error'])
      }
    })
    this.router.navigate(['/auth/my-books'])
  }

}
