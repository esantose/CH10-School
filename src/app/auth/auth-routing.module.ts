import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthStartComponent } from './auth-start/auth-start.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './../components/profile/profile.component';

const AuthRoutes: Routes = [
	{
		path: '',
		component: AuthStartComponent,
		children: [
			{ path: 'login', component: LoginComponent }, // auth/login
			{ path: 'register', component: RegisterComponent },
			{ path: 'profile/:id', component: ProfileComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(AuthRoutes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
