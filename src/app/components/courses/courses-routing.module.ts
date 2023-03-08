import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseCrudComponent } from './course-crud/course-crud.component';

const courseRoutes: Routes = [
	{ path: '', component: CoursesComponent },
	{ path: 'add', component: CourseCrudComponent },
	{ path: 'edit/:id', component: CourseCrudComponent },
	{ path: '**', component: CoursesComponent },
];

@NgModule({
	imports: [RouterModule.forChild(courseRoutes)],
	exports: [RouterModule],
})
export class CoursesRoutingModule {}
