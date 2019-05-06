import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

export interface IProfile {
  id?: number;
  image_url?: string;
  city?: string;
  job?: string;
  experience?: string;
  education?: string;
  certifications?: string;
  industry?: string;
  interests?: string;
  first_name?: string;
  last_name?: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: IProfile = {};
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
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user ', user);
    this.profile = await this.getProfile('userinfo/get', user.user.id);
  }
  // getProfiles('profile');
  async getProfile(path: string, userId: number) {
    const payload = {
      get: ['*'],
      where: {
        user_id: userId
      }
    };
    const resp = await this.http.post(path, payload);
    console.log('resp from getProfiles()', resp);
    const userInfo = resp.data[0];
    console.log('useinfo ', userInfo);
    return userInfo as IProfile;
  }

  async updateUserinfo(userinfo: any) {
    console.log('from updateUserinfo userinfo: ', userinfo);
    const resp = await this.http.put(`userinfo/id/${userinfo.id}`, userinfo);
    if (resp) {
      this.toastService.showToast('success', 3000, 'userinfo updated successufully');
    }
    return resp;
  }
  
  async logout() {
    const resp = await this.http.logout();
    if (resp.statusCode === 200) {
      localStorage.removeItem('id_token');
      this.router.navigate(['login']);
    }
  }
}
