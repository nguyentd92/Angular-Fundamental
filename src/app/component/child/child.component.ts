import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childValue = 100;
  @Output() addParentValue = new EventEmitter();
  @Output() changeParentValue = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit() {
  }

  addChildValue() {
    this.childValue++;
  }

  addParValue() {
    this.addParentValue.emit();
  }

  changeParValue(isAdd: boolean) {
    this.changeParentValue.emit(isAdd);
  }

}
