import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared-service/http.service';

@Component({
  selector: 'app-comp-tiaa-cert',
  templateUrl: './comp-tiaa-cert.component.html',
  styleUrls: ['./comp-tiaa-cert.component.css']
})
export class CompTiaaCertComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() { }

}
