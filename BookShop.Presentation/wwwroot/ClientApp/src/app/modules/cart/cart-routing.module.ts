import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartItemsComponent } from 'src/app/modules/cart/components/cart-items/cart-items.component';
import { AuthenticationGuard } from 'src/app/helpers/authentication.guard';


const routes: Routes = [{ path: 'cartitems', component: CartItemsComponent, canActivate: [AuthenticationGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
