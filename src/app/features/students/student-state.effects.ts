import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { Student } from 'src/app/models/student';
import { StudentService } from './../../services/student.service';
import {
	loadStudentState,
	addStudentState,
	editStudentState,
	deleteStudentState,
	studentsLoaded,
} from './student-state.actions';

@Injectable()
export class StudentsEffects {
	loadStudents$ = createEffect(() => {
		return this.actions$.pipe(
			// Obserable2
			ofType(loadStudentState),
			concatMap(() => {
				return this.students.getStudents().pipe(
					// Obsaervable1
					map((c: Student[]) => studentsLoaded({ students: c }))
				);
			})
		);
	});
	addStudent$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(addStudentState),
			concatMap(({ student }) => {
				return this.students.create(student).pipe(
					map((student: Student) => {
						this.snackBar.open(`${student.firstname} agregado satisfactoriamente`);
						this.router.navigate(['students']);
						return loadStudentState();
					})
				);
			})
		);
	});
	editStudent$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(editStudentState),
			concatMap(({ student }) => {
				return this.students.editStudent(student).pipe(
					map((student: Student) => {
						return loadStudentState();
					})
				);
			})
		);
	});
	deleteStudent$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(deleteStudentState),
			concatMap(({ student }) => {
				return this.students.deleteStudent(student).pipe(
					map((student: Student) => {
						return loadStudentState();
					})
				);
			})
		);
	});

	constructor(
		private students: StudentService,
		private actions$: Actions,
		private router: Router,
		private snackBar: MatSnackBar
	) {}
}
