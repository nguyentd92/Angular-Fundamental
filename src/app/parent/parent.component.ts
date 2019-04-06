import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentValue = 10;
  childValue = 100;

  constructor() { }

  ngOnInit() {
  }

  addValue(){
    this.parentValue++;
  }

  addChildValue() {
    this.childValue++;
  }

  changeValue(isAdd: boolean){
    isAdd ? this.parentValue++ : this.parentValue--;
  }
}
