import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementComponent } from 'src/app/modules/admin/components/product-management/product-management.component';
import { AuthenticationGuard } from 'src/app/helpers/authentication.guard';
import { OrderManagementComponent } from 'src/app/modules/admin/components/order-management/order-management.component';
import { UserManagementComponent } from 'src/app/modules/admin/components/user-management/user-management.component';
import { AuthenticationAdminGuard } from 'src/app/helpers/authenticationAdmin.guard';


const routes: Routes = [
  { path: 'productmanagement', component: ProductManagementComponent, canActivate: [AuthenticationAdminGuard] },
  { path: 'ordermanagement', component: OrderManagementComponent, canActivate: [AuthenticationAdminGuard] },
  { path: 'usermanagement', component: UserManagementComponent, canActivate: [AuthenticationAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
