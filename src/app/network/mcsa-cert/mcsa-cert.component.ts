import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared-service/http.service';


@Component({
  selector: 'app-mcsa-cert',
  templateUrl: './mcsa-cert.component.html',
  styleUrls: ['./mcsa-cert.component.css']
})
export class McsaCertComponent implements OnInit {
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

}
