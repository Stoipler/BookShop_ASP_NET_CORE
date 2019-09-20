import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintedEditionRoutingModule } from './printed-edition-routing.module';
import { PrintedEditionsComponent } from './components/printed-editions/printed-editions.component';
import { PrintedEditionService } from '../services/printed-edition.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrintedEditionDetailsComponent } from './components/printed-edition-details/printed-edition-details.component';

@NgModule({
  declarations: [PrintedEditionsComponent, PrintedEditionDetailsComponent],
  imports: [
    CommonModule,
    PrintedEditionRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers:[PrintedEditionService]
})
export class PrintedEditionModule { }
