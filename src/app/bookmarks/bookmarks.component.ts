import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

export interface IProfile {
  id?: number;
  bookmark_name: string;
  bookmark_date: Date;
}
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
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
    this.profiles = await this.getProfiles('bookmark');
  }
  // getProfiles('profile');
  async getProfiles(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getProfiles()', resp);
    return resp;
  }

  async createBookmark() {
    const bookmark = {
      bookmark_name: null,
      bookmark_date: null
    };
    const resp = await this.http.post('bookmark', bookmark);
    console.log('from createBookmarks resp: ', resp);
    if (resp) {
      this.profiles.unshift(resp);
    } else {
      this.toastService.showToast('danger', 3000, 'bookmarks create failed');
    }
    return resp;
  }

  async updateBookmark(bookmark: any) {
    console.log('from updateBookmarks bookmark: ', bookmark);
    const resp = await this.http.put(`bookmark/id/${bookmark.id}`, bookmark);
    if (resp) {
      this.toastService.showToast('success', 3000, 'bookmarksuserinfo updated successufully');
    }
    return resp;
  }

  async removeBookmark(bookmark: any, index: number) {
    console.log('from removeBookmark.... ', index);
    const resp = await this.http.delete(`bookmark/id/${bookmark.id}`);
    console.log('resp from removeBookmarks...', resp);
    if (resp) {
      this.refresh();
    } else {
      this.toastService.showToast('danger', 3000, 'delete bookmarks failed');
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

