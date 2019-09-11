import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorService } from './services/author.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ], 
  providers: [AuthorService],
})
export class AuthorModule { }
