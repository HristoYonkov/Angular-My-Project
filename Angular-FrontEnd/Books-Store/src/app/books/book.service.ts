import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";
import { getUser } from "../shared/authItems";
import { IBook } from "../shared/interfaces/book";

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class BookService {
    constructor(private http: HttpClient, private authService: AuthService) { }


    createBook(formData: object) {
        return this.http.post(apiUrl + '/book', formData, { headers: { 'x-authorization': getUser().accessToken } })
    }

    loadBooks() {
        return this.http.get<IBook[]>(`${apiUrl}/book`)
    }

    getBook(bookId: string) {
        return this.http.get<IBook>(`${apiUrl}/book/${bookId}`)
    }

    getMyBooks() {
        return this.http.get<IBook[]>(`${apiUrl}/book/my-books`, { headers: { 'x-authorization': getUser().accessToken } })
    }

    updateBook(book: {}, id: string) {
        return this.http.put(`${apiUrl}/book/${id}`, book, { headers: { 'x-authorization': getUser().accessToken } })
    }

    deleteBook(id: string) {
        return this.http.delete(`${apiUrl}/book/delete/${id}`, { headers: { 'x-authorization': getUser().accessToken } })
    }

    buyBook(bookId: string, userId: string) {
        return this.http.put(`${apiUrl}/book/buy`, { bookId, userId }, { headers: { 'x-authorization': getUser().accessToken } })
    }

    buyedBooks() {
        return this.http.get<IBook[]>(`${apiUrl}/book/buyedBooks`, { headers: { 'x-authorization': getUser().accessToken } })
    }

    // searchBooks(title: string) {
    //     return this.http.get<IBook[]>(`${apiUrl}/book/search`, { title })
    // }
}
