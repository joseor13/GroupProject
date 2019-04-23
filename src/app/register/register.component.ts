import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';


export interface IUser {
  id?: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userinfo: IUser = { email: null, password: null, first_name: null, last_name: null };
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
    // const token = localStorage.getItem('id_token');
    // console.log('from login ngonInit token: ', token);
    // if (token != null) {
    //   this.loggedIn = true;
    //   this.router.navigate(['profile']);
    // } else {
    //   this.loggedIn = false;
    // }

    await this.refresh();
  }
  async refresh() {
    this.profiles = await this.getProfiles('userinfo');
  }
  async getProfiles(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getProfiles()', resp);
    return resp;
  }
  // async login(user: IUser) {
  //   const resp: any = await this.http.post('user/login', user);
  //   if (resp && resp.token) {
  //     localStorage.setItem('id_token', resp.token);
  //     this.toastService.showToast('success', 7000, 'Login success.');
  //     this.router.navigate(['profile']);
  //   } else {
  //     this.toastService.showToast('danger', 7000, 'Login failed.');
  //   }
  // }
  async createUserinfo() {
    const userinfo = {
      first_name: null,
      last_name: null,
       email: null,
       password: null
    };
    const resp = await this.http.post('userinfo', userinfo);
    console.log('from createUserinfo resp: ', resp);
    if (resp) {
      this.profiles.unshift(resp);
    } else {
      this.toastService.showToast('danger', 3000, 'userinfo create failed');
    }
    return resp;
  }
}
