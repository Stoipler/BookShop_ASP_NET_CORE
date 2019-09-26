import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from 'src/app/modules/user/profile/profile.component';
import { UserService } from 'src/app/services/user.service';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[UserService]
})
export class UserModule { }
// smthing
