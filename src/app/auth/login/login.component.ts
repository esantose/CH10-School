import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IUser } from './../../models/user';
import { AuthService } from '../../services/auth.service';
import { SesionService } from '../../services/sesion.service';
import { Subscription } from 'rxjs';
import { loadSesion } from '../../features/auth/auth.actions';
import { AuthState } from '@root/features/auth/auth.reducer';
import { Sesion } from '@root/models/sesion';
import { SharedModule } from '@shared/shared.module';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
	myForm!: FormGroup;
	suscription!: Subscription;

	constructor(
		private authService: AuthService,
		private router: Router,
		private authStore: Store<AuthState>,
		private sesionService: SesionService,
		private toastrService: ToastrService
	) {}

	ngOnInit(): void {
		this.myForm = new FormGroup({
			email: new FormControl(),
			password: new FormControl(),
		});
	}

	ngOnDestroy(): void {
		if (this.suscription) this.suscription.unsubscribe();
	}

	login() {
		let user: IUser = {
			email: this.myForm.value.email,
			password: this.myForm.value.password,
			isAdmin: false,
			id: 0,
			firstname: '',
			lastname: '',
		};

		this.suscription = this.authService.login(user).subscribe((sesion: Sesion) => {
			this.authStore.dispatch(loadSesion({ sesion: sesion }));
			this.sesionService.isLoggedIn ? this.showSuccess() : this.showFailed();
		});
	}

	showSuccess(): void {
		this.toastrService.success('login Success!!!', 'Welcome to the Final Project');
		this.router.navigate(['/']);
	}

	showFailed(): void {
		this.toastrService.error('login failed!!!', 'Unable to login, check username and password');
	}

	goRegister() {
		this.router.navigate(['/auth/register']);
	}
}
