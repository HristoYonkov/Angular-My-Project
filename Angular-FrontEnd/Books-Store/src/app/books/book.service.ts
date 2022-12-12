import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IBook } from "../shared/interfaces/book";

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class BookService {
    constructor(private http: HttpClient) {}

    createBook(formData: object) {
        return this.http.post(apiUrl + '/book', formData)
    }

    loadBooks() {
        return this.http.get<IBook[]>(`${apiUrl}/book`)
    }
}