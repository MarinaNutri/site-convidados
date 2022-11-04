import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  logoEspaco = '/assets/logo-espaco.png';
  
  constructor() { }

  ngOnInit(): void {
  }

}
