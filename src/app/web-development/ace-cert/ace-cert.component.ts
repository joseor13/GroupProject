import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared-service/http.service';


@Component({
  selector: 'app-ace-cert',
  templateUrl: './ace-cert.component.html',
  styleUrls: ['./ace-cert.component.css']
})
export class AceCertComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) { }



  ngOnInit() {
  }

}
