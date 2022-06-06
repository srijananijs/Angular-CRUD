import { UsersDataComponent } from './users-data/users-data.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:UsersDataComponent},
  {path:'update/:id',component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
