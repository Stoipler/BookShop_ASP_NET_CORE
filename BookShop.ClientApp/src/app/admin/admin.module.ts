import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductManagementService } from './services/product-management.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ProductManagementComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbModule
  ], 
  providers:[ProductManagementService]
})
export class AdminModule { }
