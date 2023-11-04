import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {PagesGuardService} from "./pages-guard.service";

import {PagesComponent} from "./pages.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {CrudTaskComponent} from "./calendar/crud-task/crud-task.component";

import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzPipesModule} from "ng-zorro-antd/pipes";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCalendarModule} from 'ng-zorro-antd/calendar';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzSegmentedModule} from 'ng-zorro-antd/segmented';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calendar',
  },
  {
    path: '',
    component: PagesComponent,
    canActivate: [PagesGuardService],
    children: [{path: 'calendar', component: CalendarComponent}],
  },
];

@NgModule({
  declarations: [
    PagesComponent,
    CalendarComponent,
    CrudTaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NzLayoutModule,
    NzPipesModule,
    NzAvatarModule,
    NzDropDownModule,
    NzIconModule,
    NzCalendarModule,
    NzCollapseModule,
    NzCollapseModule,
    NzBadgeModule,
    NzAlertModule,
    NzSpaceModule,
    NzTypographyModule,
    NzTagModule,
    NzPopoverModule,
    NzButtonModule,
    NzListModule,
    NzRateModule,
    NzModalModule,
    NzGridModule,
    NzFormModule,
    NzCardModule,
    NzInputModule,
    NzCheckboxModule,
    NzSelectModule,
    NzSegmentedModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule {
}
