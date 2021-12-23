import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DepositComponent } from './deposit/deposit.component';
import { FundstransferComponent } from './fundstransfer/fundstransfer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'fundstransfer',component:FundstransferComponent,canActivate: [AuthGuard]},
  {path:'deposit',component:DepositComponent,canActivate: [AuthGuard]},
  {path:'navigation',component:NavigationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
