import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component';

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
	// { path: 'contact', component: ContactComponent },
	// { path: 'about', component: AboutComponent },
	{ path: 'test', component: TestComponent },
	{ path: '**', component: DashboardComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
