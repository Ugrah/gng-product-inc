import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {SignupComponent} from '../signup/signup.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {DashboardAppsComponent} from '../dashboard/dashboard-apps/dashboard-apps.component';
import {CreateAppComponent} from '../dashboard/create-app/create-app.component';
import {EditAppComponent} from '../dashboard/edit-app/edit-app.component';

export const AppRoutes: Routes = [
  { path: 'auth/signup',  component: SignupComponent },
  { path: 'auth/signin', component: SignInComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'dashboard', pathMatch: 'full', canActivate: [AuthGuardService], component: DashboardComponent },
  { path: 'apps', pathMatch: 'full', canActivate: [AuthGuardService], component: DashboardAppsComponent },
  { path: 'create-app', pathMatch: 'full', canActivate: [AuthGuardService], component: CreateAppComponent },
  { path: 'edit-app/:platform/:id', pathMatch: 'full', canActivate: [AuthGuardService], component: EditAppComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];
