import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'api/Account/SignUp', component: SignUpComponent },
    { path: 'api/Author', component: AuthorComponent },
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
