import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentState from './student-state.reducer';

export const selectStudentState = createFeatureSelector<fromStudentState.StudentState>(
	fromStudentState.studentStateFeatureKey
);

export const selectorLoadingStudents = createSelector(
	selectStudentState,
	(state: fromStudentState.StudentState) => state.loading
);

export const selectorStudentsLoaded = createSelector(
	selectStudentState,
	(state: fromStudentState.StudentState) => state.students
);
