import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from 'src/app/services/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from 'src/app/modules/user/components/profile/profile.component';


@NgModule({
  declarations: [ProfileComponent, OrdersComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
