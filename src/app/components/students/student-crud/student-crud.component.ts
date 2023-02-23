import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StudentCrudComponent {
  action = 'Add';
  idStudent: any;

  myForm: FormGroup;
  // dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  //   // Only highligh dates inside the month view.
  //   if (view === 'month') {
  //     const date = cellDate.getDate();

  //     // Highlight the 1st and 20th day of each month.
  //     return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  //   }

  //   return '';
  // };

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
    const idParam = 'id';
  }

  ngOnInit(): void {
    if (this.idStudent !== undefined) {
      this.action = 'Edit';
      this.esEditar();
    }
  }

  esEditar() {
    const student: Student = this.studentService.getStudent(this.idStudent);
    console.log(student);
    this.myForm.patchValue({
      firstName: student.firstName,
      lastName: student.lastName,
      birthDate: student.birthDate,
      gender: student.gender,
      email: student.email,
    });
  }

  guardarStudent() {
    const student: Student = {
      firstName: this.myForm.get('firstName')?.value,
      lastName: this.myForm.get('lastName')?.value,
      birthDate: this.myForm.get('birthDate')?.value,
      gender: this.myForm.get('gender')?.value,
      email: this.myForm.get('email')?.value,
    };
    if (this.idStudent !== undefined) {
      this.editStudent(student);
    } else {
      this.addStudent(student);
    }
  }

  addStudent(student: Student) {
    this.studentService.addStudent(student);
    // this.snackBar.open('El empleado fue registrado con exito!', '', {
    //   duration: 3000
    // });
    this.router.navigate(['/']);
  }

  editStudent(student: Student) {
    this.studentService.editStudent(student, this.idStudent);
    // this.snackBar.open('El empleado fue actualizado con exito!', '', {
    //   duration: 3000
    // });
    this.router.navigate(['/']);
  }
}
