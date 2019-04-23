import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ToastModule } from './toast/toast.module';
import { SharedServiceModule } from '../shared-service/shared-service.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../material-design/material-design.module';

import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { DatabaseComponent } from './database/database.component';
import { LoginComponent } from './login/login.component';
import { NetworkComponent } from './network/network.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutes } from './app-routing.module';
import { FourofourComponent } from './fourofour/fourofour.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RegisterComponent } from './register/register.component';
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
    FourofourComponent,
    BookmarksComponent,
    EditProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    SharedServiceModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

