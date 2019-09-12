import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintedEditionRoutingModule } from './printed-edition-routing.module';
import { PrintedEditionsComponent } from './components/printed-editions/printed-editions.component';
import { PrintedEditionService } from './service/printed-edition.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PrintedEditionsComponent],
  imports: [
    CommonModule,
    PrintedEditionRoutingModule,
    FormsModule
  ],
  providers:[PrintedEditionService]
})
export class PrintedEditionModule { }
