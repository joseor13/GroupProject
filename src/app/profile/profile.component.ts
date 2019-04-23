import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

export interface IProfile {
  id?: number;
  image_url: string;
  city: string;
  job: string;
  experience: string;
  education: string;
  certifications: string;
  industry: string;
  interests: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  async ngOnInit() {
    await this.refresh();
  }

  async refresh() {
    this.profiles = await this.getProfiles('userinfo');
  }
  // getProfiles('profile');
  async getProfiles(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getProfiles()', resp);
    return resp;
  }

  async createUserinfo() {
    const userinfo = {
      image_url: null,
      first_name: null,
      last_name: null,
      city: null,
      job: null,
      experience: null,
      education: null,
      certifications: null,
      industry: null,
      interests: null
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

  async updateUserinfo(userinfo: any) {
    console.log('from updateUserinfo userinfo: ', userinfo);
    const resp = await this.http.put(`userinfo/id/${userinfo.id}`, userinfo);
    if (resp) {
      this.toastService.showToast('success', 3000, 'userinfo updated successufully');
    }
    return resp;
  }

  async removeUserinfo(userinfo: any, index: number) {
    console.log('from removeUserinfo.... ', index);
    const resp = await this.http.delete(`userinfo/id/${userinfo.id}`);
    console.log('resp from removeUserinfo...', resp);
    if (resp) {
      this.refresh();
    } else {
      this.toastService.showToast('danger', 3000, 'delete userinfo failed');
    }
  }
  async logout() {
    const resp = await this.http.logout();
    if (resp.statusCode === 200) {
      localStorage.removeItem('id_token');
      this.router.navigate(['login']);
    }
  }
}
