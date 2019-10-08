import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/modules/user/profile/profile.component';
import { AuthGuard } from 'src/app/helpers/authentication.guard';
import { OrdersComponent } from 'src/app/modules/user/components/orders/orders.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
