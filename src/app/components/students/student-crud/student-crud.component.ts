import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.scss'],
})
export class StudentCrudComponent {
  action = 'Create';
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      email: ['', [Validators.required]],
      sex: ['', [Validators.required]],
    });
    const idParam = 'id';
  }
  ngOnInit(): void {
    // if (this.idStudent !== undefined) {
    //   this.accion = 'Editar';
    //   this.esEditar();
    // }
  }

  guardarUser() {
    // const User: User = {
    //   nombreCompleto: this.myForm.get('nombreCompleto')?.value,
    //   correo: this.myForm.get('correo')?.value,
    //   fechaIngreso: this.myForm.get('fechaIngreso')?.value,
    //   telefono: this.myForm.get('telefono')?.value,
    //   estadoCivil: this.myForm.get('estadoCivil')?.value,
    //   sexo: this.myForm.get('sexo')?.value,
    // };
    // if (this.idUser !== undefined) {
    //   this.editarUser(User);
    // } else {
    //   this.agregarUser(User);
    // }
  }
}
