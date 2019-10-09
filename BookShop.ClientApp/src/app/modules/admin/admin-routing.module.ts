import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementComponent } from 'src/app/modules/admin/components/product-management/product-management.component';
import { AuthGuard } from 'src/app/helpers/authentication.guard';
import { OrderManagementComponent } from 'src/app/modules/admin/components/order-management/order-management.component';


const routes: Routes = [
  { path: 'productmanagement', component: ProductManagementComponent, canActivate: [AuthGuard] },
  { path: 'ordermanagement', component: OrderManagementComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
