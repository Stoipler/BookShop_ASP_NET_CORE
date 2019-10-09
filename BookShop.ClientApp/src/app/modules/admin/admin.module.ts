import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from 'src/app/modules/admin/admin-routing.module';
import { ProductManagementComponent } from 'src/app/modules/admin/product-management/product-management.component';
import { ProductManagementService } from 'src/app/services/product-management.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthorService } from 'src/app/services/author.service';
import { OrderManagementComponent } from './order-management/order-management.component';

@NgModule({
  declarations: [ProductManagementComponent, OrderManagementComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
  ], 
  providers:[ProductManagementService,AuthorService]
})
export class AdminModule { }
