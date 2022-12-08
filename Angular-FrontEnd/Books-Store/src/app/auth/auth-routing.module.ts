import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
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
        ]
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);