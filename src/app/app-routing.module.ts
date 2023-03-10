import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
// import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{
		path: 'login',
		loadChildren: () => import('./auth/auth.module').then(modulo => modulo.AuthModule),
	},
	// { path: 'login', component: LoginComponent },
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
