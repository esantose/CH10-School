import { createAction, props } from '@ngrx/store';
import { Student } from '../../models/student';

export const loadStudentState = createAction('[StudentState] Load StudentStates');

export const studentsLoaded = createAction('[StudentState] Students loaded', props<{ students: Student[] }>());

export const addStudentState = createAction('[StudentState] Add student', props<{ student: Student }>());

export const editStudentState = createAction('[StudentState] Editar curso', props<{ student: Student }>());

export const deleteStudentState = createAction('[StudentState] Eliminar curso', props<{ student: Student }>());
