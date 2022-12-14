import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private router: Router ,private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  errors: string | undefined = undefined;


  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.params['id'];
    
    this.bookService.deleteBook(bookId).subscribe({
      next: (book) => { console.log(book) },
      error: (err) => {
        console.log(err.error);
        this.errors = err.error
      }
    })
    this.router.navigate(['/auth/my-books'])
  }

}
