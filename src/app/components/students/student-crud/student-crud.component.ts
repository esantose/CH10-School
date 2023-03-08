import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionTypes } from '../../../shared/action-types.enum';

@Component({
	selector: 'app-student-crud',
	templateUrl: './student-crud.component.html',
	styleUrls: ['./student-crud.component.scss'],
})
export class StudentCrudComponent implements OnInit {
	actionTypes: ActionTypes | undefined;
	id_Index: any;
	currentStudent: any;
	myForm: FormGroup;
	student = {
		id: 0,
		firstname: '',
		lastname: '',
		birthdate: '',
		gender: '',
		email: '',
	};

	constructor(
		private fb: FormBuilder,
		private studentService: StudentService,
		private router: Router,
		private aRoute: ActivatedRoute,
		public snackBar: MatSnackBar
	) {
		this.myForm = this.fb.group({
			firstname: ['', [Validators.required, Validators.maxLength(15)]],
			lastname: ['', [Validators.required]],
			birthdate: [Date.now],
			gender: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
		});

		this.id_Index = this.aRoute.snapshot.params['id'];
	}

	ngOnInit(): void {
		this.actionTypes = this.id_Index === undefined ? ActionTypes.ADD : ActionTypes.EDIT;
		console.log('Loading-actionTypes: ', this.actionTypes, this.id_Index);

		if (this.actionTypes === ActionTypes.EDIT) {
			this.getStudent(this.id_Index);
		}
	}

	getStudent(id: number | null): void {
		console.log('getStudent.crud.', id);
		this.studentService.getItem(id).subscribe(
			(student: Student) => {
				console.log('getStudent.crud-student..', student);
				// this.currentBook = student;
				this.myForm.patchValue({
					// id: student.id,
					firstname: student.firstname,
					lastname: student.lastname,
					birthdate: student.birthdate,
					gender: student.gender,
					email: student.email,
				});
				console.log(student);
			},
			(error: any) => {
				console.log(error);
			}
		);
	}

	SaveStudent() {
		console.log('Save Student...');
		const student: Student = {
			// id: this.myForm.value.id,
			firstname: this.myForm.value.firstname,
			lastname: this.myForm.value.lastname,
			birthdate: this.myForm.get('birthdate')?.value,
			gender: this.myForm.get('gender')?.value,
			email: this.myForm.value.email,
			id: 0,
		};

		switch (this.actionTypes) {
			case ActionTypes.ADD:
				this.addStudent(student);
				break;
			case ActionTypes.EDIT:
				// this.editStudent(student);
				this.updateStudent();
				break;
		}
	}

	addStudent(student: Student): void {
		const data = student;
		console.log('addStudent_http.2..', data);

		if (!data.firstname) {
			alert('Please add title!');
			return;
		}

		this.studentService.create(data).subscribe(
			response => {
				console.log(response);
				// this.isStudentAdded = true;
				this.router.navigate(['students']);
			},
			error => {
				console.log(error);
			}
		);
	}

	// editStudent(student: Student) {
	// 	console.log('editStudent', student);
	// 	this.studentService.editStudent(student, this.id_Index);
	// 	this.snackBar.open('The student has been updated succesfuly!', '', {
	// 		duration: 3000,
	// 	});

	// 	this.router.navigate(['students']);
	// }

	updateStudent(): void {
		this.studentService.update(this.currentStudent.id, this.currentStudent).subscribe(
			response => {
				console.log(response);
				this.snackBar.open('The student has been updated succesfuly!', '', {
					duration: 3000,
				});
			},
			error => {
				console.log(error);
			}
		);
	}
}
