import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from 'src/app/modules/author/author-routing.module';
import { AuthorsComponent } from 'src/app/modules/author/components/authors/authors.component';
import { AuthorService } from 'src/app/services/author.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
let AuthorModule = class AuthorModule {
};
AuthorModule = tslib_1.__decorate([
    NgModule({
        declarations: [AuthorsComponent],
        imports: [
            CommonModule,
            AuthorRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            FontAwesomeModule,
            NgbModule
        ],
        providers: [AuthorService],
    })
], AuthorModule);
export { AuthorModule };
//# sourceMappingURL=author.module.js.map