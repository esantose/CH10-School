import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeachersComponent } from './teachers.component';
import { TeacherCrudComponent } from './teacher-crud/teacher-crud.component';

const teacherRoutes: Routes = [
	{ path: '', component: TeachersComponent },
	{ path: 'add', component: TeacherCrudComponent },
	{ path: 'edit/:id', component: TeacherCrudComponent },
	{ path: '**', component: TeachersComponent },
];

@NgModule({
	imports: [RouterModule.forChild(teacherRoutes)],
	exports: [RouterModule],
})
export class TeachersRoutingModule {}
