import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Student } from '@root/models/student';
import { StudentService } from '../../services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { StudentCrudComponent } from './student-crud/student-crud.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  studentList!: Student[];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'birthDate',
    'gender',
    'email',
    'actions',
  ];

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();
  dialog: any;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.LoadStudents();
  }

  LoadStudents() {
    this.studentList = this.studentService.getStudents();
    this.dataSource = new MatTableDataSource<Student>(this.studentList);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addData() {
    this.router.navigate(['./students/add']);
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // this.table.renderRows();
  }

  editData(index: number) {
    console.log('editData', index);
    // this.router.navigate(['./students/edit', { id: index }]);
    this.router.navigate(['./students/edit', index]);
  }

  // redirect() {
  //   this.router.navigate(['./students/add']);
  // }

  abrirModal(item: Student) {
    console.log('abrirModal', item);
    const dialogRef = this.dialog.open(StudentCrudComponent, {
      data: item,
    });
  }

  removeData(index: number) {
    console.log('removeData', index);
    // this.dataSource.pop();
    // this.table.renderRows();
    this.studentService.removeStudent(index);
    this.LoadStudents();
  }

  // eliminarEmpleado(index: number) {

  //   const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
  //     width: '350px',
  //     data: {mensaje: 'Esta seguro que desea eliminar el Empleado?'}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 'aceptar') {
  //       this.empleadoService.eliminarEmpleado(index);
  //       this.cargarEmpleados();
  //       this.snackBar.open('El empleado fue eliminado con exito!', '', {
  //         duration: 3000
  //       });
  //     }
  //   });
}
