import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class GuestActivate implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}
    
    canActivate() {
        console.log(this.authService.user);
        
        if(this.authService.user !== null) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}