import { IUser } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	myForm!: FormGroup;

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {
		this.myForm = new FormGroup({
			user: new FormControl(),
			password: new FormControl(),
			isAdmin: new FormControl(false),
		});
	}

	login() {
		let user: IUser = {
			user: this.myForm.value.user,
			password: this.myForm.value.password,
			isAdmin: this.myForm.value.isAdmin,
		};
		this.authService.login(user);
		this.router.navigate(['inicio']);
	}
}
