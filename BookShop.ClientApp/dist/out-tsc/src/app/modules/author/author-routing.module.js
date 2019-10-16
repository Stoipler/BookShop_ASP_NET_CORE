import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthorsComponent } from 'src/app/modules/author/components/authors/authors.component';
const routes = [
    {
        path: 'author',
        component: AuthorsComponent,
    },
];
let AuthorRoutingModule = class AuthorRoutingModule {
};
AuthorRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AuthorRoutingModule);
export { AuthorRoutingModule };
//# sourceMappingURL=author-routing.module.js.map