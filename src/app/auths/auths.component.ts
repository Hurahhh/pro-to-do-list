import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-auths',
  template: `
    <nz-layout>
      <nz-header></nz-header>
      <nz-content>
        <div nz-row nzJustify="center">
          <div nz-col nzSpan="6">
            <router-outlet></router-outlet>
          </div>
        </div>
      </nz-content>
      <nz-footer></nz-footer>
    </nz-layout>
  `,
  styles: [`
      nz-header,
      nz-footer {
          background: #fff;
          color: #000;
          height: 15vh;
      }

      nz-content {
          background: #fff;
          color: #000;
      }
  `],
})
export class AuthsComponent {}
