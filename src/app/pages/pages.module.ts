import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {PagesGuardService} from "./pages-guard.service";
import {PagesComponent} from "./pages.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzPipesModule} from "ng-zorro-antd/pipes";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";

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
  ]
})
export class PagesModule {
}
