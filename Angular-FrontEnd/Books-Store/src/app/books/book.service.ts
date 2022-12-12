import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class BookService {
    constructor(private http: HttpClient) {}

    createBook(formData: object) {

    }
}