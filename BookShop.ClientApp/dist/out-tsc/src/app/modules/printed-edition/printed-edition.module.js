import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintedEditionRoutingModule } from 'src/app/modules/printed-edition/printed-edition-routing.module';
import { PrintedEditionsComponent } from 'src/app/modules/printed-edition/components/printed-editions/printed-editions.component';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrintedEditionDetailsComponent } from 'src/app/modules/printed-edition/components/printed-edition-details/printed-edition-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
let PrintedEditionModule = class PrintedEditionModule {
};
PrintedEditionModule = tslib_1.__decorate([
    NgModule({
        declarations: [PrintedEditionsComponent, PrintedEditionDetailsComponent],
        imports: [
            CommonModule,
            PrintedEditionRoutingModule,
            FormsModule,
            NgbModule,
            FontAwesomeModule
        ],
        providers: [PrintedEditionService]
    })
], PrintedEditionModule);
export { PrintedEditionModule };
//# sourceMappingURL=printed-edition.module.js.map