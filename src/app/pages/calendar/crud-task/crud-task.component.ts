import {Component} from "@angular/core";
import {CommonUtil} from "../../../@core/util/common.util";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ptdl-crud-task',
  templateUrl: 'crud-task.component.html',
  styleUrls: ['crud-task.component.css']
})
export class CrudTaskComponent {
  visible = true;
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

  addTask() {
    this.taskFormArray.push(this.fb.group({
      level: [1, [Validators.required]],
      title: ['a', [Validators.required]],
      description: ['b', []],
      repeat: [true, []],
      repeatNumber: [3, []],
      done: [true, []],
      rate: [1, []],
    }));
  }

  removeTask(index: number) {
    this.taskFormArray.removeAt(index);
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }


}
