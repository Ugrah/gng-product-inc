import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
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
    EditAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AppsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
