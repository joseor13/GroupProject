import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { AceCertComponent } from './web-development/ace-cert/ace-cert.component';
import { AwsCertComponent } from './web-development/aws-cert/aws-cert.component';
import { CcnaCertComponent } from './network/ccna-cert/ccna-cert.component';
import { CiwCertComponent } from './web-development/ciw-cert/ciw-cert.component';
import { CompTiaaCertComponent } from './cybersecurity/comp-tiaa-cert/comp-tiaa-cert.component';
import { CompTiaLinuxComponent } from './cybersecurity/comp-tia-linux/comp-tia-linux.component';
import { CompTiaNetworkComponent } from './network/comp-tia-network/comp-tia-network.component';
import { Db2CertComponent } from './database/db2-cert/db2-cert.component';
import { McsaCertComponent } from './network/mcsa-cert/mcsa-cert.component';
import { MtaCertComponent } from './cybersecurity/mta-cert/mta-cert.component';
import { OcaCertComponent } from './database/oca-cert/oca-cert.component';
import { OcpCertComponent } from './database/ocp-cert/ocp-cert.component';

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
    RegisterComponent,
    AceCertComponent,
    AwsCertComponent,
    CcnaCertComponent,
    CiwCertComponent,
    CompTiaaCertComponent,
    CompTiaLinuxComponent,
    CompTiaNetworkComponent,
    Db2CertComponent,
    McsaCertComponent,
    MtaCertComponent,
    OcaCertComponent,
    OcpCertComponent,

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
// tslint:disable-next-line: deprecation
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

