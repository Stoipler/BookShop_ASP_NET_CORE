import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/components/app/app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AuthorModule } from 'src/app/modules/author/author.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrintedEditionModule } from 'src/app/modules/printed-edition/printed-edition.module';
import { AdminModule } from 'src/app/modules/admin/admin.module';
import { AccountModule } from 'src/app/modules/account/account.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


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
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
