import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementComponent } from 'src/app/modules/admin/components/product-management/product-management.component';
import { OrderManagementComponent } from 'src/app/modules/admin/components/order-management/order-management.component';
import { UserManagementComponent } from 'src/app/modules/admin/components/user-management/user-management.component';
import { AuthenticationAdminGuard } from 'src/app/helpers/authenticationAdmin.guard';
import { AuthorManagementComponent } from 'src/app/modules/admin/components/author-management/author-management.component';
import { DiscountManagementComponent } from 'src/app/modules/admin/components/discount-management/discount-management.component';


const routes: Routes = [
  { path: 'productmanagement', component: ProductManagementComponent, canActivate: [AuthenticationAdminGuard] },
  { path: 'ordermanagement', component: OrderManagementComponent, canActivate: [AuthenticationAdminGuard] },
  { path: 'usermanagement', component: UserManagementComponent, canActivate: [AuthenticationAdminGuard] },
  { path: 'authormanagement', component: AuthorManagementComponent, canActivate: [AuthenticationAdminGuard] },
  { path: 'discountmanagement', component: DiscountManagementComponent, canActivate: [AuthenticationAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
