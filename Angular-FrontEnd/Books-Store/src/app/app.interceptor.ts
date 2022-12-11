import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../environments/environment'
const apiUrl = environment.apiUrl;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    token: string | null = localStorage.getItem('token')
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.token){
            return next.handle(req.clone({ setHeaders: { 'X-Authorization': this.token}}));
        }else{
            return next.handle(req.clone())
        }
    }

}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};