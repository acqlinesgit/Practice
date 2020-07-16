import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService, Verification } from './login.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { StorageService } from '../share/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private nbToast: NbToastrService,
    private loginService: LoginService,
    private router: Router,
    private storageService: StorageService
  ) {

  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      Account: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  async login() {
    const Account = this.profileForm.value.Account;
    const Password = this.profileForm.value.Password;
    if (!this.profileForm.valid) {// 判斷帳號密碼不得為空
      this.nbToast.danger('', '妳帳號密碼錯誤喔🍕');
      return;
    }
    const body: Verification = { // 回傳json
      Account: this.profileForm.value.Account,
      Password: this.profileForm.value.Password
    };
    await this.loginService.checkLogin(body).toPromise().then(data => { // 連接API驗證帳號密碼
      if (data.Result) {
        this.nbToast.success('', data.Msg);
        this.storageService.setSession('Member', data.Member);
        // tslint:disable-next-line: no-unused-expression
        this.router.navigate(['/layout']);
      } else {
        this.nbToast.danger('', data.Msg);
        return;
      }
    });
  }
}
