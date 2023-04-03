import { Student } from './student';

export interface StudentState {
	loading: boolean;
	students: Student[];
}
