import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionTypes } from '../../../shared/action-types.enum';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addStudentState, editStudentState } from '../../../features/students/student-state.actions';
import { StudentState } from '../../../features/students/student-state.reducer';

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

	students$!: Observable<Student[]>;

	constructor(
		private fb: FormBuilder,
		private studentService: StudentService,
		private router: Router,
		private aRoute: ActivatedRoute,
		public snackBar: MatSnackBar,
		// private dialogRef: MatDialogRef<StudentCrudComponent>,
		private store: Store<StudentState> // @Inject(MAT_DIALOG_DATA) student: Student
	) {
		console.log('constructor');
		this.myForm = this.fb.group({
			id: [],
			firstname: ['', [Validators.required, Validators.maxLength(15)]],
			lastname: ['', [Validators.required]],
			birthdate: [Date.now],
			gender: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
		});

		this.id_Index = this.aRoute.snapshot.params['id'];
		console.log(this.id_Index);
	}

	ngOnInit(): void {
		this.actionTypes = this.id_Index === undefined ? ActionTypes.ADD : ActionTypes.EDIT;
		if (this.actionTypes === ActionTypes.EDIT) {
			this.getStudent(this.id_Index);
		}
	}

	getStudent(id: number | null): void {
		this.studentService.getItem(id).subscribe(
			(student: Student) => {
				console.log('getStudent.crud-student..', student);
				this.myForm.patchValue({
					id: student.id,
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
		// this.students$ = this.studentService.getStudents();
		// this.studentService.getItem(id).subscribe(
		// 	(student: Student) => {
		// 			id: student.id,
		// 			firstname: student.firstname,
		// 			lastname: student.lastname,
		// 			birthdate: student.birthdate,
		// 			gender: student.gender,
		// 			email: student.email
		// 	}

		// )
		// let student: Student = {
		// 	id: this.student.id,
		// 	firstname: this.myForm.value.firsmyFormtname,
		// 	lastname: this.myForm.value.lastname,
		// 	birthdate: this.myForm.value.birthdate,
		// 	gender: this.myForm.value.gender,
		// 	email: this.myForm.value.email,
		// };
		// this.store.dispatch(editStudentState({ student: student }));
		// this.dialogRef.close(student);
	}

	SaveStudent() {
		console.log('Saving student');
		const student: Student = {
			id: this.myForm.value.id,
			firstname: this.myForm.value.firstname,
			lastname: this.myForm.value.lastname,
			birthdate: this.myForm.get('birthdate')?.value,
			gender: this.myForm.get('gender')?.value,
			email: this.myForm.value.email,
			// id: 0,
		};
		console.log('Save Student...', student);
		switch (this.actionTypes) {
			case ActionTypes.ADD:
				this.addStudent(student);
				break;
			case ActionTypes.EDIT:
				this.currentStudent = student;
				this.updateStudent();
				break;
		}
	}

	addStudent(student: Student): void {
		const data = student;
		this.store.dispatch(addStudentState({ student: student }));
		// if (!data.firstname) {
		// 	alert('Please add title!');
		// 	return;
		// }

		// this.studentService.create(data).subscribe(
		// 	response => {
		// 		this.router.navigate(['students']);
		// 	},
		// 	error => {
		// 		console.log(error);
		// 	}
		// );
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
		console.log('updateStudent', this.currentStudent);
		this.store.dispatch(editStudentState({ student: this.currentStudent }));
		this.router.navigate(['students']);
		// this.dialogRef.close(this.student);
		// this.studentService.update(this.currentStudent.id, this.currentStudent).subscribe(
		// 	response => {
		// 		console.log(response);
		// 		this.snackBar.open('The student has been updated succesfuly!', '', {
		// 			duration: 3000,
		// 		});
		// 		this.router.navigate(['students']);
		// 	},
		// 	error => {
		// 		console.log(error);
		// 	}
		// );
	}
}
