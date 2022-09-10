import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path : '' , component : HomeComponent,},
  { path : 'login', component : LoginComponent},
  { path : 'dashboard', component : DashboardComponent, canActivate : [AuthGuard]},
  { path : 'register', component : RegisterComponent},
  { path : 'apply', component : ApplyComponent, canActivate : [AuthGuard]},
  { path : 'status', component : StatusComponent, canActivate : [AuthGuard]},
  { path : 'logout', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
