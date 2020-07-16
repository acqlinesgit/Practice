import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { StorageService } from '../share/storage.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  Member: string;
  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    if (!this.storageService.getSession('Member')) {
      alert('請登入');
      this.router.navigate(['/login']);
      return;
    }
    this.Member = this.storageService.getSession('Member');

  }
  loginout() { // 登出
    // tslint:disable-next-line: no-unused-expression
    this.storageService.clearSession();
    this.router.navigate(['/login']);
  }
  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
    });
  }

}
