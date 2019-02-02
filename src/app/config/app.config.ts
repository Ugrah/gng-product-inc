import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {SignupComponent} from '../signup/signup.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {DashboardAppsComponent} from '../dashboard/dashboard-apps/dashboard-apps.component';
import {CreateAppComponent} from '../dashboard/create-app/create-app.component';
import {EditAppComponent} from '../dashboard/edit-app/edit-app.component';
import {NewAppsComponent} from '../dashboard/dashboard-apps/new-apps/new-apps.component';
import {ShowSingleAppComponent} from '../dashboard/show-single-app/show-single-app.component';
import {PrivacyPolicyComponent} from '../privacy-policy/privacy-policy.component';
import {ToUpdateAppsComponent} from '../dashboard/dashboard-apps/to-update-apps/to-update-apps.component';
import {ReadyAppsComponent} from '../dashboard/dashboard-apps/ready-apps/ready-apps.component';
import {PendingApprovalAppsComponent} from '../dashboard/dashboard-apps/pending-approval-apps/pending-approval-apps.component';
import {AlreadyPublishedAppsComponent} from '../dashboard/dashboard-apps/already-published-apps/already-published-apps.component';
import {RejectedAppsComponent} from '../dashboard/dashboard-apps/rejected-apps/rejected-apps.component';

export const AppRoutes: Routes = [
  { path: 'auth/signup',  component: SignupComponent },
  { path: 'auth/signin', component: SignInComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'dashboard', pathMatch: 'full', canActivate: [AuthGuardService], component: DashboardComponent },
  { path: 'apps', pathMatch: 'full', canActivate: [AuthGuardService], component: DashboardAppsComponent },
  { path: 'create-app', pathMatch: 'full', canActivate: [AuthGuardService], component: CreateAppComponent },
  { path: 'edit-app/:platform/:id', pathMatch: 'full', canActivate: [AuthGuardService], component: EditAppComponent },
  { path: 'show-app/:platform/:id', pathMatch: 'full', canActivate: [AuthGuardService], component: ShowSingleAppComponent },
  { path: 'new-apps/:platform', pathMatch: 'full', canActivate: [AuthGuardService], component: NewAppsComponent },
  { path: 'new-apps', redirectTo: 'new-apps/ios', pathMatch: 'full' },
  { path: 'to-update-apps/:platform', pathMatch: 'full', canActivate: [AuthGuardService], component: ToUpdateAppsComponent },
  { path: 'to-update-apps', redirectTo: 'to-update-apps/ios', pathMatch: 'full' },
  { path: 'ready-apps/:platform', pathMatch: 'full', canActivate: [AuthGuardService], component: ReadyAppsComponent },
  { path: 'ready-apps', redirectTo: 'ready-apps/ios', pathMatch: 'full' },
  { path: 'pending-approval-apps/:platform', pathMatch: 'full', canActivate: [AuthGuardService], component: PendingApprovalAppsComponent },
  { path: 'pending-approval-apps', redirectTo: 'pending-approval-apps/ios', pathMatch: 'full' },
  { path: 'published-apps/:platform', pathMatch: 'full', canActivate: [AuthGuardService], component: AlreadyPublishedAppsComponent },
  { path: 'published-apps', redirectTo: 'published-apps/ios', pathMatch: 'full' },
  { path: 'rejected-apps/:platform', pathMatch: 'full', canActivate: [AuthGuardService], component: RejectedAppsComponent },
  { path: 'rejected-apps', redirectTo: 'rejected-apps/ios', pathMatch: 'full' },
  { path: 'privacy-policy/:platform/:id', component: PrivacyPolicyComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];
