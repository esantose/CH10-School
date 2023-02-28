import { Component, Input, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    // public student: Student,
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });

    const idParam = 'id';
    this.idStudent = this.aRoute.snapshot.params[idParam];
    console.log('idStudent****: ' + this.idStudent);
  }

  ngOnInit(): void {
    console.log('Loading');
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
    console.log('guardarStudent...', student);
    if (this.idStudent !== undefined) {
      this.editStudent(student);
    } else {
      this.addStudent(student);
    }
  }

  addStudent(student: Student) {
    console.log('addStudent');
    this.studentService.addStudent(student);
    // this.snackBar.open('El empleado fue registrado con exito!', '', {
    //   duration: 3000
    // });
    this.router.navigate(['/']);
  }

  editStudent(student: Student) {
    console.log('editStudent');
    this.studentService.editStudent(student, this.idStudent);
    // this.snackBar.open('El empleado fue actualizado con exito!', '', {
    //   duration: 3000
    // });
    this.router.navigate(['/']);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('guardarStudent.0..');
    console.warn(this.myForm.value);
    const student: Student = {
      firstName: this.myForm.get('firstName')?.value,
      lastName: this.myForm.get('lastName')?.value,
      birthDate: this.myForm.get('birthDate')?.value,
      gender: this.myForm.get('gender')?.value,
      email: this.myForm.get('email')?.value,
    };
    console.log('guardarStudent...', student);
    if (this.idStudent !== undefined) {
      this.editStudent(student);
    } else {
      this.addStudent(student);
    }
  }
}
