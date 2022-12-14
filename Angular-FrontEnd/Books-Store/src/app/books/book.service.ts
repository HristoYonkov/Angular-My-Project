import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";
import { IBook } from "../shared/interfaces/book";

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class BookService {
    constructor(private http: HttpClient, private authService: AuthService) {}

    
    createBook(formData: object) {
        return this.http.post(apiUrl + '/book', formData)
    }
    
    loadBooks() {
        return this.http.get<IBook[]>(`${apiUrl}/book`)
    }
    
    getBook(bookId: string) {
        return this.http.get<IBook>(`${apiUrl}/book/${bookId}`)
    }
    
    getMyBooks() {
        return this.http.get<IBook[]>(`${apiUrl}/book/my-books`)
    }

    updateBook(book: {}, id: string) {
    return this.http.put(`${apiUrl}/book/${id}`, book)
    }
}
