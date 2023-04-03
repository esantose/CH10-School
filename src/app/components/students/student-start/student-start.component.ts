import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStudentState } from '@root/features/students/student-state.actions';
import { StudentState } from '@root/models/student.state';

@Component({
	selector: 'app-student-start',
	templateUrl: './student-start.component.html',
	styleUrls: ['./student-start.component.scss'],
})
export class StudentStartComponent {
	constructor(private store: Store<StudentState>) {}

	ngOnInit() {
		this.store.dispatch(loadStudentState());
	}
}
