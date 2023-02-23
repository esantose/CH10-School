import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentList: Student[] = [
    {
      firstName: 'Tomas',
      lastName: 'Martinez',
      birthDate: new Date('2001-10-05'),
      email: 'abc@gmail.com',
      gender: 'Masculino',
    },
    {
      firstName: 'Edgardo',
      lastName: 'Santos',
      birthDate: new Date(),
      email: 'efg@gmail.com',
      gender: 'Masculino',
    },
    {
      firstName: 'Gary',
      lastName: 'Schutz',
      birthDate: new Date(),
      email: 'abc1@gmail.com',
      gender: 'Masculino',
    },
    {
      firstName: 'Maria',
      lastName: 'Belen',
      birthDate: new Date(),
      email: 'abc2@gmail.com',
      gender: 'Femenino',
    },
  ];

  constructor() {}

  getStudents() {
    return this.studentList.slice();
  }

  addStudent(student: Student) {
    this.studentList.unshift(student);
  }

  removeStudent(index: number) {
    this.studentList.splice(index, 1);
  }

  getStudent(index: number) {
    return this.studentList[index];
  }

  editStudent(student: Student, index: number) {
    this.studentList[index].firstName = student.firstName;
    this.studentList[index].lastName = student.lastName;
    this.studentList[index].birthDate = student.birthDate;
    this.studentList[index].gender = student.gender;
    this.studentList[index].email = student.email;
  }
}
