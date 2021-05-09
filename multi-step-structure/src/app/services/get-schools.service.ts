import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { School } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  getSchools(): Observable<School[]> {
    let SchoolsList: Array<School> = new Array<School>();
    SchoolsList = [{
      name: 'Mayor House',
      id: 1,
    }, {
      name: 'BIE',
      id: 2
    },
    {
      name: 'American',
      id: 3
    },
    {
      name: 'Collage',
      id: 4
    }];

    return of(SchoolsList);
  }
}
