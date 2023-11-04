import {Component} from "@angular/core";
import {CommonUtil} from "../../@core/util/common.util";

@Component({
  selector: 'ptdl-calendar',
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent {
  COLORS = CommonUtil.COLORS;
}
