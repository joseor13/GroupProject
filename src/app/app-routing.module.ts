
import { RouterModule, Routes  } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DatabaseComponent } from './database/database.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { NetworkComponent } from './network/network.component';
import { FourofourComponent } from './fourofour/fourofour.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
path: 'home',
component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
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
  path: 'bookmarks',
  component: BookmarksComponent
}, {
  path: 'edit-profile',
  component: EditProfileComponent
}, {
  path: '**',
  component: FourofourComponent
}

];
export const  AppRoutes = RouterModule.forRoot(routes);

