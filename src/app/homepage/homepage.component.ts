import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  loggedIn = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('id_token');
    console.log('from login ngonInit token: ', token);
    if (token != null) {
      this.loggedIn = true;
      this.router.navigate(['home']);
    } else {
      this.loggedIn = false;
    }
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
