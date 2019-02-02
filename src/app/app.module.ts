import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ClipboardModule} from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import { SignInComponent } from './sign-in/sign-in.component';
import {AuthGuardService} from './services/auth-guard.service';
import { DashboardAsideComponent } from './dashboard/dashboard-aside/dashboard-aside.component';
import { DashboardNavbarComponent } from './dashboard/dashboard-navbar/dashboard-navbar.component';
import {SidebarModule} from 'ng-sidebar';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { DashboardAppsComponent } from './dashboard/dashboard-apps/dashboard-apps.component';
import {AppsService} from './services/apps.service';
import { NewAppFormComponent } from './forms/new-app-form/new-app-form.component';
import { AppsRapportsComponent } from './dashboard/apps-rapports/apps-rapports.component';
import { CreateAppComponent } from './dashboard/create-app/create-app.component';
import { EditAppComponent } from './dashboard/edit-app/edit-app.component';
import { ShowSingleAppComponent } from './dashboard/show-single-app/show-single-app.component';
import { AppsByPlatformComponent } from './dashboard/apps-by-platform/apps-by-platform.component';
import { NewAppsComponent } from './dashboard/dashboard-apps/new-apps/new-apps.component';
import { ToUpdateAppsComponent } from './dashboard/dashboard-apps/to-update-apps/to-update-apps.component';
import { ReadyAppsComponent } from './dashboard/dashboard-apps/ready-apps/ready-apps.component';
import { PendingApprovalAppsComponent } from './dashboard/dashboard-apps/pending-approval-apps/pending-approval-apps.component';
import { AlreadyPublishedAppsComponent } from './dashboard/dashboard-apps/already-published-apps/already-published-apps.component';
import { RejectedAppsComponent } from './dashboard/dashboard-apps/rejected-apps/rejected-apps.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    SignupComponent,
    SignInComponent,
    DashboardAsideComponent,
    DashboardNavbarComponent,
    HomeCarouselComponent,
    DashboardAppsComponent,
    NewAppFormComponent,
    AppsRapportsComponent,
    CreateAppComponent,
    EditAppComponent,
    ShowSingleAppComponent,
    AppsByPlatformComponent,
    NewAppsComponent,
    ToUpdateAppsComponent,
    ReadyAppsComponent,
    PendingApprovalAppsComponent,
    AlreadyPublishedAppsComponent,
    RejectedAppsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    ClipboardModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AppsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
