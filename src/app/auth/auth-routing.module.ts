import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthStartComponent } from './../auth//auth-start/auth-start.component';
import { LoginComponent } from './../auth/login/login.component';

const routes: Routes = [
	// {
	// 	path: '',
	// 	component: AuthStartComponent,
	// 	children: [
	// 		// auth
	// 		{ path: 'login', component: LoginComponent }, // auth/login
	// 	],
	// },
	{
		path: '',
		component: LoginComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
