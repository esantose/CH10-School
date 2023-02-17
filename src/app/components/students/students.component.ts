import { Component, OnInit } from '@angular/core';
import { Student } from '@root/models/student';
import { StudentService } from '../../services/student.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'birthDate',
    'startDate',
    'sex',
    'email',
    'actions',
  ];
  dataSource = new MatTableDataSource<Student>();
  studentList!: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.LoadStudents();
  }

  LoadStudents() {
    this.studentList = this.studentService.getStudents();
    console.log('lista..', this.studentList);
    this.dataSource = new MatTableDataSource<Student>(this.studentList);

    //this.dataSource = new MatTableDataSource(this.listUser);
  }
}
