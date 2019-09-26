import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementComponent } from 'src/app/modules/admin/product-management/product-management.component';
import { AuthGuard } from 'src/app/helpers/authentication.guard';


const routes: Routes = [
    { path: 'productmanagement', component: ProductManagementComponent,canActivate:[AuthGuard] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
