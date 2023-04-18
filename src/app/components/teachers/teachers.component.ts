import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITeacher } from '@root/models/teacher';
import { TeacherService } from '../../services/teacher.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TeacherCrudComponent } from './teacher-crud/teacher-crud.component';
import { SesionService } from '@root/services/sesion.service';
import { Observable } from 'rxjs';
import { Sesion } from '@root/models/sesion';

@Component({
	selector: 'app-teachers',
	templateUrl: './teachers.component.html',
	styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent {
	@ViewChild(MatSort, { static: true }) sort!: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	teacherList!: ITeacher[];
	displayedColumns: string[] = ['firstname', 'lastname', 'birthdate', 'gender', 'email', 'actions'];

	dataSource: MatTableDataSource<ITeacher> = new MatTableDataSource<ITeacher>();
	dialog: any;
	sesion$!: Observable<Sesion>;

	constructor(private teacherService: TeacherService, private router: Router, public sesion: SesionService) {}

	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.LoadTeachers();
		this.sesion$ = this.sesion.obtenerSesion();
	}

	LoadTeachers() {
		this.teacherList = this.teacherService.getTeachers();
		this.dataSource = new MatTableDataSource<ITeacher>(this.teacherList);

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	addData() {
		this.router.navigate(['./teachers/add']);
	}

	editData(index: number) {
		alert('No yet implemenmted');
	}

	abrirModal(item: ITeacher) {
		const dialogRef = this.dialog.open(TeacherCrudComponent, {
			data: item,
		});
	}

	removeData(index: number) {
		this.teacherService.removeTeacher(index);
		this.LoadTeachers();
	}
}
