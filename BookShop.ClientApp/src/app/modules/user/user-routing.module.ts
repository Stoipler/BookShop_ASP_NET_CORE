import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/helpers/authentication.guard';
import { OrdersComponent } from 'src/app/modules/user/components/orders/orders.component';
import { ProfileComponent } from 'src/app/modules/user/components/profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
