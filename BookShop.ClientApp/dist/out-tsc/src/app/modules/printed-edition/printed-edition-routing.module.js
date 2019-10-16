import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrintedEditionsComponent } from 'src/app/modules/printed-edition/components/printed-editions/printed-editions.component';
import { PrintedEditionDetailsComponent } from 'src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component';
const routes = [
    { path: 'printededition', component: PrintedEditionsComponent },
    { path: 'printededition/:printedEditionId', component: PrintedEditionDetailsComponent }
];
let PrintedEditionRoutingModule = class PrintedEditionRoutingModule {
};
PrintedEditionRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PrintedEditionRoutingModule);
export { PrintedEditionRoutingModule };
//# sourceMappingURL=printed-edition-routing.module.js.map