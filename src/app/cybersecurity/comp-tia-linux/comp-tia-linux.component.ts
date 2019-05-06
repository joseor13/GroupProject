import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared-service/http.service';


@Component({
  selector: 'app-comp-tia-linux',
  templateUrl: './comp-tia-linux.component.html',
  styleUrls: ['./comp-tia-linux.component.css']
})
export class CompTiaLinuxComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

}
