import { createReducer, on } from '@ngrx/store';
import { Student } from '@root/models/student';
import * as StudentStateActions from './student-state.actions';

export const studentStateFeatureKey = 'studentState';

export interface StudentState {
	loading: boolean;
	students: Student[];
}

export const initialState: StudentState = {
	loading: false,
	students: [],
};

// TODO: Research 'Spread Operator' in typescript
export const reducer = createReducer(
	initialState,
	on(StudentStateActions.loadStudentState, state => {
		// Research: Clean and elegant code using typescript
		//----------------------------
		// const nuevoEstado: StudentState = {
		// 	loading: true,
		// 	students: state.students,
		// };
		// return nuevoEstado;
		return { ...state, loading: true };
	}),
	on(StudentStateActions.studentsLoaded, (state, { students }) => {
		// Research: Clean and elegant code using typescript
		//----------------------------
		// const nuevoEstado: StudentState = {
		// 	loading: false,
		// 	students: students,
		// };
		// return nuevoEstado;

		return { ...state, loading: false, students };
	})
);
