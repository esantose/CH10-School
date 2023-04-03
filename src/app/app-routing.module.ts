import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { InicioComponent } from './components/inicio/inicio.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SesionGuard } from './guards/sesion.guard';

const routes: Routes = [
	// { path: 'inicio', component: InicioComponent, canActivate: [SesionGuard] },
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(modulo => modulo.AuthModule),
	},
	{
		path: 'students',
		loadChildren: () => import('./components/students/students.module').then(modulo => modulo.StudentsModule),
		// canLoad: [SesionGuard],
	},
	{
		path: 'teachers',
		loadChildren: () => import('./components/teachers/teachers.module').then(modulo => modulo.TeachersModule),
	},
	{
		path: 'courses',
		loadChildren: () => import('./components/courses/courses.module').then(modulo => modulo.CoursesModule),
	},
	{ path: 'profile', component: ProfileComponent },
	// { path: '', redirectTo: 'start', pathMatch: 'full' },
	{ path: '**', component: DashboardComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
