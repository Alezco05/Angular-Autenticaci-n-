import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {PrivateTasksComponent} from './components/private-tasks/private-tasks.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {SignupComponent} from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: TasksComponent, pathMatch: 'full'},
  {path: 'tasks', component: TasksComponent},
  {path: 'private', component: PrivateTasksComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
