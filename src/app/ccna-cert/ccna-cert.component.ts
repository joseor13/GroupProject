import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared-service/http.service';


@Component({
  selector: 'app-ccna-cert',
  templateUrl: './ccna-cert.component.html',
  styleUrls: ['./ccna-cert.component.css']
})
export class CcnaCertComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

}
