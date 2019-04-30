import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared-service/http.service';
@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {

  }
  async logout() {
    const resp = await this.http.logout();
    if (resp.statusCode === 200) {
      localStorage.removeItem('id_token');
      this.router.navigate(['login']);
    }
  }
}
