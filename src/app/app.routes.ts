import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login';
import {BankerListComponent} from './pages/banker-list/banker-list';
import {CustomerListComponent} from './pages/customer-list/customer-list';
import {LoanApplicationListComponent} from './pages/loan-application-list/loan-application-list';
import {NewLoanFormComponent} from './pages/new-loan-form/new-loan-form';

export const routes: Routes = [
  {path:'',
  redirectTo:'login',
  pathMatch:'full',},
  {path:'login',
  component: LoginComponent},
  {path:'banker-list',
  component: BankerListComponent},
  {path:'customer-list',
  component: CustomerListComponent},
  {path: 'loan-application-list',
  component: LoanApplicationListComponent},
  {path:'customers-list',
  component: CustomerListComponent},
  {path: 'new-loan-form',
  component: NewLoanFormComponent}
];
