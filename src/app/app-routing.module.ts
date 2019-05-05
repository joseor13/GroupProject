
import { RouterModule, Routes } from '@angular/router';

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
import { AceCertComponent } from './ace-cert/ace-cert.component';
import { AwsCertComponent } from './aws-cert/aws-cert.component';
import { CcnaCertComponent } from './ccna-cert/ccna-cert.component';
import { CiwCertComponent } from './ciw-cert/ciw-cert.component';
import { CompTiaaCertComponent } from './comp-tiaa-cert/comp-tiaa-cert.component';
import { CompTiaLinuxComponent } from './comp-tia-linux/comp-tia-linux.component';
import { CompTiaNetworkComponent } from './comp-tia-network/comp-tia-network.component';
import { Db2CertComponent } from './db2-cert/db2-cert.component';
import { McsaCertComponent } from './mcsa-cert/mcsa-cert.component';
import { MtaCertComponent } from './mta-cert/mta-cert.component';
import { OcaCertComponent } from './oca-cert/oca-cert.component';
import { OcpCertComponent } from './ocp-cert/ocp-cert.component';


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
    component: DatabaseComponent,
    children: [
      {
        path: 'db2-cert',
        component: Db2CertComponent
      },
      {
        path: 'oca-cert',
        component: OcaCertComponent
      },
      {
        path: 'ocp-cert',
        component: OcpCertComponent
      }

    ]
  }, {
    path: 'web-development',
    component: WebDevelopmentComponent,
    children: [
        {
          path: 'ace-cert',
          component: AceCertComponent
        },
        {
          path: 'aws-cert',
          component: AwsCertComponent
        },
        {
          path: 'ciw-cert',
          component: CiwCertComponent
        }
    ]
  }, {
    path: 'network',
    component: NetworkComponent,
    children: [
      {
        path: 'ccna-cert',
        component: CcnaCertComponent
      },
      {
        path: 'comp-tia-network',
        component: CompTiaNetworkComponent
      },
      {
        path: 'comp-tia-linux',
        component: CompTiaLinuxComponent
      }
    ]
  }, {
    path: 'cybersecurity',
    component: CybersecurityComponent,
    children: [
      {
        path: 'comp-tiaa-cert',
        component: CompTiaaCertComponent

      },
      {
        path: 'mcsa-cert',
        component: McsaCertComponent
      },
      {
        path: 'mta-cert',
        component: MtaCertComponent
      }
    ]
  }, {
    path: 'bookmarks',
    component: BookmarksComponent
  }, {
    path: 'edit-profile',
    component: EditProfileComponent
  }, {
    path: '**',
    component: FourofourComponent
  }, {
    path: 'ace-cert',
    component: AceCertComponent
  }, {
    path: 'aws-cert',
    component: AwsCertComponent
  },
  {
    path: 'ccna-cert',
    component: CcnaCertComponent
  },
  {
    path: 'ciw-cert',
    component: CiwCertComponent
  },
  {
    path: 'comp-tia-linux',
    component: CompTiaLinuxComponent
  },
  {
    path: 'comp-tia-network',
    component: CompTiaNetworkComponent
  },
  {
    path: 'comp-tiaa-cert',
    component: CompTiaaCertComponent
  },
  {
    path: 'db2-cert',
    component: Db2CertComponent
  },
  {
    path: 'mcsa-cert',
    component: McsaCertComponent
  }, {
    path: 'mta-cert',
    component: MtaCertComponent
  }, {
    path: 'oca-cert',
    component: OcaCertComponent
  }, {
    path: 'ocp-cert',
    component: OcpCertComponent
  }














];
export const AppRoutes = RouterModule.forRoot(routes);

