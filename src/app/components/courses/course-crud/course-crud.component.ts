import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICourse } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionTypes } from '../../../shared/action-types.enum';

@Component({
	selector: 'app-course-crud',
	templateUrl: './course-crud.component.html',
	styleUrls: ['./course-crud.component.scss'],
})
export class CourseCrudComponent {
	actionTypes: ActionTypes | undefined;
	id_Index: any;
	myForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private courseService: CourseService,
		private router: Router,
		private aRoute: ActivatedRoute,
		public snackBar: MatSnackBar
	) {
		this.myForm = this.fb.group({
			id: ['', [Validators.required, Validators.maxLength(15)]],
			name: ['', [Validators.required]],
			description: ['', [Validators.required]],
		});

		const idParam = 'id';
		this.id_Index = this.aRoute.snapshot.params[idParam];
	}

	ngOnInit(): void {
		this.actionTypes = this.id_Index === undefined ? ActionTypes.ADD : ActionTypes.EDIT;

		if (this.actionTypes === ActionTypes.EDIT) {
			this.DisplayCourse();
		}
	}

	DisplayCourse() {
		const course: ICourse = this.courseService.getCourse(this.id_Index);
		this.myForm.patchValue({
			id: course.id,
			name: course.name,
			description: course.description,
		});
	}

	SaveCourse() {
		const course: ICourse = {
			id: this.myForm.value.id,
			name: this.myForm.value.name,
			description: this.myForm.get('description')?.value,
		};

		switch (this.actionTypes) {
			case ActionTypes.ADD:
				this.addCourse(course);
				break;
			case ActionTypes.EDIT:
				this.editCourse(course);
				break;
		}
	}

	addCourse(course: ICourse) {
		this.courseService.addCourse(course);
		this.snackBar.open('The Course has beed added succesfuly!', '', { duration: 3000 });
		this.router.navigate(['Courses']);
	}

	editCourse(course: ICourse) {
		this.courseService.editCourse(course, this.id_Index);
		this.snackBar.open('The Course has been updated succesfuly!', '', {
			duration: 3000,
		});

		this.router.navigate(['Courses']);
	}
}
