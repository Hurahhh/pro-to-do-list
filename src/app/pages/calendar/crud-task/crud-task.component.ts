import {Component} from "@angular/core";
import {CommonUtil} from "../../../@core/utils/common.util";
import {AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {DayWorkModel} from "../../../@core/models/day-work.model";
import {format} from "date-fns";

@Component({
  selector: 'ptdl-crud-task',
  templateUrl: 'crud-task.component.html',
  styleUrls: ['crud-task.component.css']
})
export class CrudTaskComponent {
  visible = false;
  title = '04/11/2023';
  viewOptions = [
    {label: 'Mặc định', value: 1},
    {label: 'Mức độ', value: 2}
  ];
  levelOptions = [
    {label: 'Thấp', value: 1, color: CommonUtil.COLORS.INFO},
    {label: 'Trung', value: 2, color: CommonUtil.COLORS.WARNING},
    {label: 'Cao', value: 3, color: CommonUtil.COLORS.ERROR},
  ];
  repeatOptions = [
    {label: '03 lần', value: 3},
    {label: '05 lần', value: 5},
    {label: '07 lần', value: 7},
    {label: '09 lần', value: 9},
    {label: '11 lần', value: 11},
  ];
  form!: FormGroup;
  dw!: DayWorkModel;

  constructor(private fb: FormBuilder) {
  }

  get taskFormArray() {
    return <FormArray>this.form.get('tasks');
  }

  ngOnInit() {
    this.form = this.fb.group({
      tasks: this.fb.array([], [Validators.required])
    });
  }

  repeatNumberValidator(fg: AbstractControl): ValidationErrors | null {
    const required = !!fg.get('repeat')?.value;
    const hasValue = required ? !!(fg.get('repeatNumber')?.value) : true;
    if (!hasValue) {
      fg.get('repeatNumber')?.setErrors({required: true});
      return {requiredRepeatNumber: true};
    }
    return null;
  };

  addTask() {
    const fg = this.fb.group(
      {
        level: [null, [Validators.required]],
        title: [null, [Validators.required]],
        description: [null, []],
        repeat: [false, []],
        repeatNumber: [0, []],
        done: [false, []],
        rate: [0, []],
      },
      {
        validators: [this.repeatNumberValidator]
      }
    );
    this.taskFormArray.push(fg);
  }

  removeTask(index: number) {
    this.taskFormArray.removeAt(index);
  }

  show(dw: DayWorkModel) {
    this.dw = dw;
    this.title = format(dw.date.toDate(), 'dd/MM/yyyy');
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  updateDW() {
    // validate form
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((c) => {
        if (c instanceof FormArray) {
          c.markAsTouched();
          Object.values(c.controls).forEach((_c) => {
            if (_c instanceof FormGroup) {
              Object.values(_c.controls).forEach((__c) => {
                if (__c.invalid) {
                  __c.markAsDirty();
                  __c.updateValueAndValidity({onlySelf: false});
                }
              });
            }
          });
        } else if (c.invalid) {
          c.markAsDirty();
          c.updateValueAndValidity({onlySelf: false});
        }
      });
      return;
    }

    // get form data
    console.log(this.form);
  }

}
