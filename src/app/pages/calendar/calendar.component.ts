import {Component, ViewChild} from "@angular/core";
import {CommonUtil} from "../../@core/utils/common.util";
import {CrudTaskComponent} from "./crud-task/crud-task.component";
import {DayWorkModel} from "../../@core/models/day-work.model";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'ptdl-calendar',
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent {
  COLORS = CommonUtil.COLORS;
  selectedDate = new Date();
  calendarMode: 'month' | 'year' = 'month';
  @ViewChild(CrudTaskComponent, {static: true}) crudTaskComp!: CrudTaskComponent;

  onSelectedDate(date: Date) {

  }

  onDblClicked(e: any) {
    if (this.calendarMode == 'month' && e.target.className == 'ant-picker-calendar-date-content ng-star-inserted') {
      const dw = {
        date: Timestamp.fromDate(this.selectedDate),
      } as DayWorkModel;
      this.crudTaskComp.show(dw);
    }
  }
}
