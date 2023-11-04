import {NgModule} from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';

import {
  CalendarOutline,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  HeartOutline,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  MinusOutline,
  PlusOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  CalendarOutline,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  UserOutline,
  HeartOutline,
  PlusOutline,
  MinusOutline,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
];

@NgModule({
  imports: [NzIconModule.forChild(icons)],
  exports: [NzIconModule],
  providers: [],
})
export class IconsProviderModule {
}
