import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
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
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'my-books',
                component: MyBooksComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
        ]
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);