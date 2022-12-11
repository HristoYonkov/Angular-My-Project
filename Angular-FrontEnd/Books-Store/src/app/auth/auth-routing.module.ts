import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { GuestActivate } from "../shared/guards/guest.activate";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { MyBooksComponent } from "./my-books/my-books.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'auth',
        // ---- Guard friendly way !!!
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [GuestActivate]
            },
            {
                path: 'register',
                component: RegisterComponent,
                canActivate: [GuestActivate]
            },
            {
                path: 'my-books',
                component: MyBooksComponent,
                canActivate: [AuthActivate]
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthActivate]
            },
            {
                path: 'logout',
                component: LogoutComponent,
                canActivate: [AuthActivate]
            },
        ]
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);