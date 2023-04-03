import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../../guards/admin.guard';
import { SesionGuard } from '../../guards/sesion.guard';

import { StudentsComponent } from './students.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { StudentStartComponent } from './student-start/student-start.component';

const studentRoutes: Routes = [
	{
		path: '',
		component: StudentStartComponent,
		canActivateChild: [SesionGuard],
		children: [
			{ path: 'list', component: StudentsComponent },
			{ path: 'add', component: StudentCrudComponent },
			{ path: 'edit/:id', component: StudentCrudComponent },
			{ path: '**', component: StudentsComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(studentRoutes)],
	exports: [RouterModule],
})
export class StudentsRoutingModule {}
