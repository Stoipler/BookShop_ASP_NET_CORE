import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthorModule } from './modules/author/author.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PrintedEditionModule } from './modules/printed-edition/printed-edition.module';
import { AdminModule } from './modules/admin/admin.module';
import { AccountModule } from './modules/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    AccountModule,
    AuthorModule,
    AdminModule,
    PrintedEditionModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
