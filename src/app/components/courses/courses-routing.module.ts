import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { AdminGuard } from '@root/guards/admin.guard';

const courseRoutes: Routes = [
	{ path: '', component: CoursesComponent },
	{ path: 'add', component: CourseCrudComponent, canActivate: [AdminGuard] },
	{ path: 'edit/:id', component: CourseCrudComponent, canActivate: [AdminGuard] },
	{ path: '**', component: CoursesComponent },
];

@NgModule({
	imports: [RouterModule.forChild(courseRoutes)],
	exports: [RouterModule],
})
export class CoursesRoutingModule {}
