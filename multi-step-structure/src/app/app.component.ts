import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddComponent } from './components/add/add.component';
import { DesignComponent } from './components/design/design.component';
import { DataModel } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('stepOneComponent') stepOneComponent: AddComponent;
  @ViewChild('stepTwoComponent') stepTwoComponent: DesignComponent;

  tableData = new Array<DataModel>();
  dataSource;
  designData;
  constructor() { }

  get frmStepOne() {
    return this.stepOneComponent ? this.stepOneComponent.frmStepOne : null;
  }

  get frmStepTwo() {
    return this.stepTwoComponent ? this.stepTwoComponent.frmStepTwo : null;
  }

  saveTableData(data): void {
    this.tableData.push(data);
    this.tableData.map((row, index) => {
      row.position = index + 1;
    });
    this.dataSource = new MatTableDataSource<any>(
      this.tableData
    );
  }

  saveDesign(design): void {
    this.designData = design;
  }
  edit(rowIndex): void {
  }

  delete(rowIndex): void {
    this.tableData.splice(rowIndex, 1);
    this.dataSource = new MatTableDataSource<any>(
      this.tableData
    );
  }

}
