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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/helpers/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/helpers/error.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from 'src/app/components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AccountModule,
    AuthorModule,
    AdminModule,
    PrintedEditionModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
