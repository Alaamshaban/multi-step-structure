import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  frmStepTwo: FormGroup;
  headerColors = ['#DAF7A6',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#900C3F',
    '#581845',
  ];
  rowColors = [
    '#041215',
    '#03303b',
    '#0e7288',
    '#156062',
    '#2c8a83',

  ];
  @Output() getDesignData = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.frmStepTwo = this.formBuilder.group({
      headerFontColors: [this.headerColors],
      headerBackgroundColors: [this.headerColors],
      rowFontColors: [this.rowColors],
      rowBackgroundColors: [this.rowColors]
    });
  }
  submit(): void {
    this.getDesignData.next(this.frmStepTwo.value);
  }

}
