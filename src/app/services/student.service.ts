import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList: Student[] = [
    {
      firstName: 'Lucas', lastName: 'Martinez', birthDate: new Date ('2001-10-05'), email: 'abc@gmail.com',
      startDate: new Date(), sex: 'Masculino', 
    },
    {
      firstName: 'Edgardo', lastName: 'Santos', birthDate: new Date(), email: 'efg@gmail.com',
      startDate: new Date('2019-05-25'), sex: 'Masculino',
    },
    {
      firstName: 'Gary', lastName: 'Schutz', birthDate: new Date(), email: 'abc1@gmail.com',
      startDate: new Date('2020-01-31'), sex: 'Femenino',
    },
    {
      firstName: 'Maria', lastName: 'Belen', birthDate: new Date(), email: 'abc2@gmail.com',
      startDate: new Date('2020-01-31'), sex: 'Femenino',
    }
  ];
  constructor() { }

  getStudents() {
    return this.studentList.slice();
  }
}
