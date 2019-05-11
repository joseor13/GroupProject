import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpEventType } from '@angular/common/http';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) { }
}

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
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profile: IProfile = {};
  selectedFile: ImageSnippet;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService

  ) { }
  // upload image//
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }
  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    console.log('upload image: ', file);

    const reader = new FileReader();
    console.log('upload look: ', reader);

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log('image: ', this.selectedFile);

      this.selectedFile.pending = true;
      this.http.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
          console.log('success: ', res);
        },
        (err) => {
          this.onError();
          console.log('error: ', err);
        });
    });
    reader.readAsDataURL(file);
  }

  // upload image//
  // upload image 1
  // upload image 2
  async ngOnInit() {
    await this.refresh();

  }
  async refresh() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user ', user);
    this.profile = await this.getProfiles('userinfo/get', user.user.id);
  }
  // getProfiles('profile');
  async getProfiles(path: string, userId: number) {
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
    console.log('update user: ', resp);
    if (resp) {
      this.toastService.showToast('success', 3000, 'userinfo updated successufully');
    }
    return userinfo as IProfile;
  }
  // register foreign key
  async createUserinfo(userinfo) {
    const resp = await this.http.post('userinfo', userinfo);
    console.log('from createUserinfo resp: ', resp);
    if (resp) {
      this.toastService.showToast('success', 3000, 'userinfo created successufully');
    } else {
      this.toastService.showToast('danger', 3000, 'userinfo create failed');
    }
    return userinfo as IProfile;
  }

  async logout() {
    const resp = await this.http.logout();
    if (resp.statusCode === 200) {
      localStorage.removeItem('id_token');
      this.router.navigate(['login']);
    }
  }

}
