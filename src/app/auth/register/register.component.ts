import { IUser } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	myForm!: FormGroup;
	user = {
		id: 0,
		firstname: '',
		lastname: '',
		birthdate: '',
		gender: '',
		email: '',
	};

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private authService: AuthService,
		private toastrService: ToastrService
	) {
		this.myForm = this.fb.group({
			id: [],
			firstname: ['', [Validators.required, Validators.maxLength(15)]],
			lastname: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
			isAdmin: false,
		});
	}

	ngOnInit(): void {}

	register(): void {
		const user: IUser = {
			id: 0, // this.myForm.value.id,
			firstname: this.myForm.value.firstname,
			lastname: this.myForm.value.lastname,
			email: this.myForm.value.email,
			password: this.myForm.value.password,
			isAdmin: this.myForm.value.isAdmin,
		};
		const data = user;

		this.authService.createUser(data).subscribe(
			(response: any) => {
				this.toastrService.success('Signup Success', user.firstname + ', you are welcome');
				this.router.navigate(['auth/login']);
			},
			(error: any) => {
				console.log(error);
			}
		);
	}

	goLogin() {
		this.router.navigate(['/auth/login']);
	}
}
