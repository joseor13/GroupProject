
import { RouterModule, Routes  } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { DatabaseComponent } from './database/database.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { NetworkComponent } from './network/network.component';
import { FourofourComponent } from './fourofour/fourofour.component';


const routes: Routes = [
  {
path: 'home',
component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'signup',
  component: SignupComponent
}, {
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'database',
  component: DatabaseComponent
}, {
  path: 'web-development',
  component: WebDevelopmentComponent
}, {
  path: 'network',
  component: NetworkComponent
}, {
  path: 'cybersecurity',
  component: CybersecurityComponent
}, {
  path: '**',
  component: FourofourComponent
}

];
export const  AppRoutes = RouterModule.forRoot(routes);

