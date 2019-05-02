import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-tiaa-cert',
  templateUrl: './comp-tiaa-cert.component.html',
  styleUrls: ['./comp-tiaa-cert.component.css']
})
export class CompTiaaCertComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  navigateTo(path: string) {
  this.router.navigate([path]);
  }

}
