import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { MatTableDataSource } from '@angular/material/table';
import { Student } from '@root/models/student';
import { StudentService } from '../../services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { Observable, of, tap } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '@root/services/sesion.service';
import { StudentState } from '@root/features/students/student-state.reducer';
import { selectorLoadingStudents, selectorStudentsLoaded } from '@root/features/students/student-state.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { deleteStudentState } from '@root/features/students/student-state.actions';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-students',
	templateUrl: './students.component.html',
	styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
	@ViewChild(MatSort, { static: true }) sort!: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	// displayedColumns: string[] = ['id', 'fulltname', 'birthdate', 'gender', 'email', 'actions'];
	displayedColumns: string[] = ['id', 'firstname', 'lastname', 'birthdate', 'gender', 'email', 'actions'];

	dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

	currentStudent: any;
	currentIndex = -1;
	message = '';

	// NGXS
	sesion$!: Observable<Sesion>;
	loading$!: Observable<Boolean>;
	students$!: Observable<Student[]>;

	constructor(
		private studentService: StudentService,
		private router: Router,
		public sesion: SesionService,
		private dialog: MatDialog,
		private store: Store<StudentState>,
		private toastrService: ToastrService,
		private snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.loading$ = this.store.select(selectorLoadingStudents);
		this.students$ = this.store.select(selectorStudentsLoaded);
		this.students$.subscribe(response => {
			this.dataSource.data = response;
		});

		this.sesion$ = this.sesion.obtenerSesion();
	}

	addData() {
		this.router.navigate(['./students/add']);
	}

	editData(index: number) {
		this.router.navigate(['./students/edit', index]);
	}

	abrirModal(item: Student) {
		const dialogRef = this.dialog.open(StudentCrudComponent, {
			data: item,
		});
	}

	removeData(student: Student) {
		this.store.dispatch(deleteStudentState({ student }));
	}
}
