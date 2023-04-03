import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IUser } from './../../models/user';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { loadSesion } from '../../features/auth/auth.actions';
import { AuthState } from '@root/features/auth/auth.reducer';
import { Sesion } from '@root/models/sesion';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
	myForm!: FormGroup;
	suscription!: Subscription;
	// public userInfo: any;

	constructor(
		private authService: AuthService,
		private router: Router,
		private authStore: Store<AuthState>,
		private toastrService: ToastrService
	) {}

	ngOnInit(): void {
		this.myForm = new FormGroup({
			email: new FormControl(),
			password: new FormControl(),
		});
	}

	ngOnDestroy(): void {
		this.suscription.unsubscribe();
	}

	login() {
		let user: IUser = {
			// email: this.myForm.value.email,
			// password: this.myForm.value.password,
			// isAdmin: false,
			email: this.myForm.value.email,
			password: this.myForm.value.password,
			isAdmin: false, //this.myForm.value.isAdmin,
			id: 0,
			firstname: '',
			lastname: '',
		};
		// this.authService.login(user);
		// this.showSuccess();

		// this.router.navigate(['dashboard']);
		this.suscription = this.authService.login(user).subscribe((sesion: Sesion) => {
			this.authStore.dispatch(loadSesion({ sesion: sesion }));
			this.showSuccess();
			this.router.navigate(['dashboard']);
		});
	}

	showSuccess(): void {
		this.toastrService.success('login Success!', 'Welcome to the Final Project');
	}

	goRegister() {
		this.router.navigate(['/auth/register']);
	}
}
