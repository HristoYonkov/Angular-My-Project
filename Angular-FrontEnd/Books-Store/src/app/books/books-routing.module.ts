import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
    {
        path: 'books',
        // ---- Guard friendly way !!!
        children: [
            {
                path: 'details',
                component: DetailsComponent
            },
            {
                path: 'edit',
                component: EditComponent
            },
            {
                path: 'create',
                component: CreateComponent
            }
        ]
    }
];

export const BooksRoutingModule = RouterModule.forChild(routes)