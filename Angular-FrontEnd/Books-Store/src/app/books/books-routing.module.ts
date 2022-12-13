import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { CreateComponent } from "./create/create.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
    {
        path: 'book',
        // ---- Guard friendly way !!!
        children: [
            {
                path: 'details/:id',
                component: DetailsComponent
            },
            {
                path: 'edit/:id',
                component: EditComponent,
                canActivate: [AuthActivate]
            },
            {
                path: 'create',
                component: CreateComponent,
                canActivate: [AuthActivate]
            }
        ]
    }
];

export const BooksRoutingModule = RouterModule.forChild(routes)