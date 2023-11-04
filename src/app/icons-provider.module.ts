import {NgModule} from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';

import {
  CalendarOutline,
  HeartOutline,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  CalendarOutline,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  UserOutline,
  HeartOutline
];

@NgModule({
  imports: [NzIconModule.forChild(icons)],
  exports: [NzIconModule],
  providers: [],
})
export class IconsProviderModule {
}
