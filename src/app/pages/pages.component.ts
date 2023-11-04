import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Auth, signOut} from '@angular/fire/auth';
import {NzMessageService} from 'ng-zorro-antd/message';
import {CommonUtil} from "../@core/utils/common.util";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {
  isCollapsed = false;
  userName: string | null | undefined = '';

  constructor(
    private messageService: NzMessageService,
    private router: Router,
    private auth: Auth
  ) {
    this.userName = this.auth.currentUser?.email ?? '';
  }

  onLogout() {
    signOut(this.auth)
      .then(() => {
        this.router.navigate(['/auth/login']);
      })
      .catch((error) => {
        console.log(error);
        this.messageService.create('error', CommonUtil.COMMON_ERROR_MESSAGE);
      });
  }
}
