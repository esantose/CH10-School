import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
	displayedColumns: string[] = ['id', 'firstname', 'lastname', 'birthdate', 'gender', 'email', 'actions'];

	dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();
	dialog: any;

	currentStudent: any;
	currentIndex = -1;
	message = '';

	constructor(private studentService: StudentService, private router: Router) {}

	ngOnInit(): void {
		console.log('Loading ngOnInit...');
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.LoadStudents();
	}

	LoadStudents() {
		console.log('Loading...');

		this.studentService.list().subscribe(
			(students: Student[]) => {
				console.log(students.length);
				console.log(students);
				this.studentList = students;
				this.dataSource = new MatTableDataSource<Student>(this.studentList);

				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
			},
			(error: any) => {
				console.log(error);
			}
		);
	}

	addData() {
		this.router.navigate(['./students/add']);
	}

	// editData(index: number) {
	// 	console.log('editData', index);
	// 	// this.router.navigate(['./students/edit', { id: index }]);
	// 	// ok  this.router.navigate(['./students/edit', index]);
	// }

	abrirModal(item: Student) {
		console.log('abrirModal', item);
		const dialogRef = this.dialog.open(StudentCrudComponent, {
			data: item,
		});
	}

	removeData(index: number) {
		// this.studentService.removeStudent(index);
		// this.LoadStudents();
		console.log('removeData-Index: ', index);
		this.studentService.delete(index).subscribe(
			response => {
				this.LoadStudents();
				//this.router.navigate(['/students']);
			},
			error => {
				console.log(error);
			}
		);
	}
}
