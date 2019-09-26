import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from 'src/app/modules/author/author-routing.module';
import { AuthorsComponent } from 'src/app/modules/author/components/authors/authors.component';
import { AuthorService } from 'src/app/services/author.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ], 
  providers: [AuthorService],
})
export class AuthorModule { }
