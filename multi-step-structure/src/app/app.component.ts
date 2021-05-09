import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { DesignComponent } from './components/design/design.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('stepOneComponent') stepOneComponent: AddComponent;
  @ViewChild('stepTwoComponent') stepTwoComponent: DesignComponent;
 // @ViewChild(StepTwoComponent) stepThreeComponent: StepThreeComponent;

  constructor() {}

  get frmStepOne() {
    return this.stepOneComponent ? this.stepOneComponent.frmStepOne : null;
 }

 get frmStepTwo() {
    return this.stepTwoComponent ? this.stepTwoComponent.frmStepTwo : null;
 }

  ngOnInit() {
  }
}
