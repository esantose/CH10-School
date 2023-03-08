import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITeacher } from '@root/models/teacher';
import { TeacherService } from '../../services/teacher.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TeacherCrudComponent } from './teacher-crud/teacher-crud.component';

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

	constructor(private teacherService: TeacherService, private router: Router) {}

	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.LoadTeachers();
	}

	LoadTeachers() {
		this.teacherList = this.teacherService.getTeachers();
		this.dataSource = new MatTableDataSource<ITeacher>(this.teacherList);

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	addData() {
		this.router.navigate(['./teachers/add']);
		// const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
		// this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
		// this.table.renderRows();
	}

	editData(index: number) {
		console.log('editData', index);
		// this.router.navigate(['./students/edit', { id: index }]);
		// ok  this.router.navigate(['./students/edit', index]);
	}

	abrirModal(item: ITeacher) {
		console.log('abrirModal', item);
		const dialogRef = this.dialog.open(TeacherCrudComponent, {
			data: item,
		});
	}

	removeData(index: number) {
		this.teacherService.removeTeacher(index);
		this.LoadTeachers();
	}
}
