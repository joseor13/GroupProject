import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';


export interface IUser {
  id?: number;
  email: string;
  password: string;
  username: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: IUser = { email: null, password: null, username: null };
  currentUser = {};
  loggedIn = false;
  profiles = [];
  constructor(
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) {
  }

  async ngOnInit() {
    await this.refresh();
  }
  async refresh() {
  }

  async createUser(user) {
    console.log('user ', user);

    const newUser = {
      email: user.email,
      username: user.username,
      password: user.password,
      hash: 'xyc'
    };
    const resp = await this.http.post('user', user);
    console.log('from createUser resp: ', resp);
    if (resp) {
      const payload = {
        user_id: resp.id,
        role_type_id: 1
      };
      const role = await this.http.post('userRole', payload);
      console.log('userrole ', role);
      } else {
        this.toastService.showToast('danger', 3000, 'userinfo create failed');
    }
    return resp;
  }

  async login(user: IUser) {
    const resp: any = await this.http.post('user/login', user);
    if (resp && resp.token) {
      localStorage.setItem('id_token', resp.token);
      this.toastService.showToast('success', 7000, 'Login success.');
      this.router.navigate(['profile']);
    } else {
      this.toastService.showToast('danger', 7000, 'Login failed.');
    }
  }
}
