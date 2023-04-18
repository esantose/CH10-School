import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICourse } from '@root/models/course';
import { Sesion } from 'src/app/models/sesion';
import { CourseService } from '../../services/course.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { SesionService } from '@root/services/sesion.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
	@ViewChild(MatSort, { static: true }) sort!: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	CourseList!: ICourse[];
	displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
	sesion$!: Observable<Sesion>;

	dataSource: MatTableDataSource<ICourse> = new MatTableDataSource<ICourse>();
	dialog: any;

	constructor(private CourseService: CourseService, private router: Router, public sesion: SesionService) {}

	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.LoadCourses();
		this.sesion$ = this.sesion.obtenerSesion();
	}

	LoadCourses() {
		this.CourseList = this.CourseService.getCourses();
		this.dataSource = new MatTableDataSource<ICourse>(this.CourseList);

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	addData() {
		this.router.navigate(['./courses/add']);
	}

	editData(index: number) {
		alert('No yet implemenmted');
	}

	abrirModal(item: ICourse) {
		const dialogRef = this.dialog.open(CourseCrudComponent, {
			data: item,
		});
	}

	removeData(index: number) {
		this.CourseService.removeCourse(index);
		this.LoadCourses();
	}
}
