import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared-service/http.service';


@Component({
  selector: 'app-comp-tia-network',
  templateUrl: './comp-tia-network.component.html',
  styleUrls: ['./comp-tia-network.component.css']
})
export class CompTiaNetworkComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

}
