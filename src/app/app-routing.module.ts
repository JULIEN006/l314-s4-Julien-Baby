import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent }, // Tout les utilisateurs
  { path: 'users/create', component: CreateUserComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'user-update/:id', component: UserUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }