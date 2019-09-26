import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/modules/user/profile/profile.component';


const routes: Routes = [{
  path: 'user',
  children: [
    { path: 'profile', component: ProfileComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
