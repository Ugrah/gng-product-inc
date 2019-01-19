import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {SignupComponent} from '../signup/signup.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {AuthGuardService} from '../providers/auth-guard.service';

export const AppRoutes: Routes = [
  { path: 'auth/signup', canActivate: [AuthGuardService], component: SignupComponent },
  { path: 'auth/signin', component: SignInComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'dashboard', pathMatch: 'full', canActivate: [AuthGuardService], component: DashboardComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];
