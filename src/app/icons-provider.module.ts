import {NgModule} from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';

import {
  CalendarOutline,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  MinusOutline,
  PlusOutline,
  StarFill,
  UserOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  CalendarOutline,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  UserOutline,
  PlusOutline,
  MinusOutline,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  StarFill,
];

@NgModule({
  imports: [NzIconModule.forChild(icons)],
  exports: [NzIconModule],
  providers: [],
})
export class IconsProviderModule {
}
