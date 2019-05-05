import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared-service/http.service';


@Component({
  selector: 'app-mta-cert',
  templateUrl: './mta-cert.component.html',
  styleUrls: ['./mta-cert.component.css']
})
export class MtaCertComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

}
