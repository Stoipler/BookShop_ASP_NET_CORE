import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';


const routes: Routes = [{
  path: 'admin',
  children: [
    { path: 'productmanagement', component: ProductManagementComponent },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
