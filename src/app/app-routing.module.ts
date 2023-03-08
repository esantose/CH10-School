import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{
		path: 'students',
		loadChildren: () => import('./components/students/students.module').then(modulo => modulo.StudentsModule),
	},
	{
		path: 'teachers',
		loadChildren: () => import('./components/teachers/teachers.module').then(modulo => modulo.TeachersModule),
	},
	{
		path: 'courses',
		loadChildren: () => import('./components/courses/courses.module').then(modulo => modulo.CoursesModule),
	},
	{ path: '**', component: DashboardComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
