import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITeacher } from '../../../models/teacher';
import { TeacherService } from '../../../services/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionTypes } from '../../../shared/action-types.enum';

@Component({
	selector: 'app-teacher-crud',
	templateUrl: './teacher-crud.component.html',
	styleUrls: ['./teacher-crud.component.scss'],
})
export class TeacherCrudComponent {
	actionTypes: ActionTypes | undefined;
	id_Index: any;
	myForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private teacherService: TeacherService,
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

		const idParam = 'id';
		this.id_Index = this.aRoute.snapshot.params[idParam];
	}

	ngOnInit(): void {
		this.actionTypes = this.id_Index === undefined ? ActionTypes.ADD : ActionTypes.EDIT;

		if (this.actionTypes === ActionTypes.EDIT) {
			this.DisplayTeacher();
		}
	}

	DisplayTeacher() {
		const teacher: ITeacher = this.teacherService.getTeacher(this.id_Index);
		console.log('esEditar..', teacher);
		this.myForm.patchValue({
			firstname: teacher.firstname,
			lastname: teacher.lastname,
			birthdate: teacher.birthdate,
			gender: teacher.gender,
			email: teacher.email,
		});
	}

	SaveTeacher() {
		const teacher: ITeacher = {
			firstname: this.myForm.value.firstname,
			lastname: this.myForm.value.lastname,
			birthdate: this.myForm.get('birthdate')?.value,
			gender: this.myForm.get('gender')?.value,
			email: this.myForm.value.email,
		};

		switch (this.actionTypes) {
			case ActionTypes.ADD:
				this.addTeacher(teacher);
				break;
			case ActionTypes.EDIT:
				this.editTeacher(teacher);
				break;
		}
	}

	addTeacher(teacher: ITeacher) {
		this.teacherService.addTeacher(teacher);
		this.snackBar.open('The Teacher has beed added succesfuly!', '', { duration: 3000 });
		this.router.navigate(['teachers']);
	}

	editTeacher(teacher: ITeacher) {
		this.teacherService.editTeacher(teacher, this.id_Index);
		this.snackBar.open('The student has been updated succesfuly!', '', {
			duration: 3000,
		});

		this.router.navigate(['teachers']);
	}
}
