import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './students.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';

const studentRoutes: Routes = [
	{ path: '', component: StudentsComponent },
	{ path: 'add', component: StudentCrudComponent },
	{ path: 'edit/:id', component: StudentCrudComponent },
	{ path: '**', component: StudentsComponent },
];

@NgModule({
	imports: [RouterModule.forChild(studentRoutes)],
	exports: [RouterModule],
})
export class StudentsRoutingModule {}
