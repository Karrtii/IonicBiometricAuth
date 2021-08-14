import { Component, OnInit } from '@angular/core';
import {AccessService} from "../access.service";

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {

  logoutTimer = this.accessService.logoutTimer.asObservable();

  constructor(private accessService: AccessService) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.accessService.resetLogoutTimer();
  }

}
