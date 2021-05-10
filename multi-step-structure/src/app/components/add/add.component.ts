import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/get-schools.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  frmStepOne: FormGroup;
  minDate: Date;
  maxDate: Date;
  schools: School[];
  @Output() getTableData = new EventEmitter();

  constructor(
    private schoolService: SchoolService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 41, 0, 1);
    this.maxDate = new Date(currentYear - 21, 0, 31);
    const validPattern = '^[a-zA-Z0-9]{4,10}$'; // alphanumeric exact 10 letters
    this.frmStepOne = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(validPattern)]],
      birth_date: ['', Validators.required],
      school: ['', Validators.required],
      id: ['', [Validators.maxLength(4), Validators.required]]
    });
    this.fetchSchools();
  }

  fetchSchools() {
    this.schoolService.getSchools().subscribe(fetchedSchools => {
      this.schools = fetchedSchools;
    });
  }

  submit() {
    if (!this.frmStepOne.valid) {
      this.getFormErrors();
    } else {
      this.getTableData.next(this.frmStepOne.value);
    }
  }
  getFormErrors() {
    Object.keys(this.frmStepOne.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.frmStepOne.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.frmStepOne.get(key).markAsTouched();
        });
      }
    });
  }

}
