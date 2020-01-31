import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomComponent } from 'src/app/modules/chat/components/chat-room/chat-room.component';
import { AuthenticationGuard } from 'src/app/helpers/authentication.guard';


const routes: Routes = [{ path: 'chatroom', component: ChatRoomComponent, canActivate: [AuthenticationGuard] },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
