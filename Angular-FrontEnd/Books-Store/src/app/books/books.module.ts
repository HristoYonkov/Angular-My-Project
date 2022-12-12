import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { BooksRoutingModule } from './books-routing.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetailsComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ]
})
export class BooksModule { }
