import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from 'src/app/modules/admin/admin-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthorService } from 'src/app/services/author.service';
import { ProductManagementComponent } from 'src/app/modules/admin/components/product-management/product-management.component';
import { OrderManagementComponent } from 'src/app/modules/admin/components/order-management/order-management.component';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AuthorManagementComponent } from 'src/app/modules/admin/components/author-management/author-management.component';
import { DiscountManagementComponent } from './components/discount-management/discount-management.component';

@NgModule({
  declarations: [ProductManagementComponent,
    OrderManagementComponent,
    UserManagementComponent,
    AuthorManagementComponent,
    DiscountManagementComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [PrintedEditionService, AuthorService]
})
export class AdminModule { }
