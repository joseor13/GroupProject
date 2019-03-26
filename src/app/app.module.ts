import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { DatabaseComponent } from './database/database.component';
import { LoginComponent } from './login/login.component';
import { NetworkComponent } from './network/network.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutes } from './app-routing.module';
import { FourofourComponent } from './fourofour/fourofour.component';

@NgModule({
  declarations: [
    AppComponent,
    CybersecurityComponent,
    DatabaseComponent,
    LoginComponent,
    NetworkComponent,
    WebDevelopmentComponent,
    HomeComponent,
    ProfileComponent,
    SignupComponent,
    FourofourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

