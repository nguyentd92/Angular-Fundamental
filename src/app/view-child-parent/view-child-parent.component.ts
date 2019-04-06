import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.scss']
})
export class ViewChildParentComponent implements OnInit {

  parentValue = 30;

  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild(ViewChildComponent)
  myChild: ViewChildComponent;

  onAddForChild() {
    this.myChild.childValue++;
  }
}
