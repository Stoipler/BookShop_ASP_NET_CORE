import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';
import { HeaderComponent } from './shared/header/header.component';
import { AuthorModule } from './author/author.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PrintedEditionModule } from './printed-edition/printed-edition.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    AccountModule,
    AuthorModule,
    PrintedEditionModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
