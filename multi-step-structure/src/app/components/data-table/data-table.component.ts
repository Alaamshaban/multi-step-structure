import { Component, DoCheck, Input, EventEmitter, Output } from '@angular/core';
import { DataModel } from 'src/app/models/data.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  displayedColumns: string[] = ['position', 'name', 'birthdate', 'school', 'id', 'actions'];
  @Input() tableData: DataModel[];
  transformToJson = false;
  @Input() tableDataSource;
  @Input() designData;
  @Output() editRow = new EventEmitter();
  @Output() deleteRow = new EventEmitter();
  constructor() { }

  edit(index): void {
    this.editRow.next(index);
  }
  delete(index): void {
    this.deleteRow.next(index);
  }
}
