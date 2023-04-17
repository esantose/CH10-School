import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthState } from './../../features/auth/auth.reducer';
import { Store } from '@ngrx/store';
import { selectSesionActiva, selectCurrentUser } from './../../features/auth/auth.selectors';
import { Observable } from 'rxjs';
import { IUser } from '@root/models/user';
import { SesionService } from '@root/services/sesion.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
	myForm!: FormGroup;
	sesionActiva$!: Observable<Boolean>;
	usuarioActivo$!: Observable<IUser | undefined>;

	constructor(private fb: FormBuilder, private authStore: Store<AuthState>, public sesionServ: SesionService) {}

	ngOnInit(): void {
		this.sesionActiva$ = this.authStore.select(selectSesionActiva);
		this.usuarioActivo$ = this.authStore.select(selectCurrentUser);

		this.usuarioActivo$.subscribe(user => {
			this.myForm = this.fb.group({
				id: 0,
				firstname: user?.firstname,
				//   lastname: ['', [Validators.required]],
				//   email: ['', [Validators.required, Validators.email]],
				//   password: ['', [Validators.required]],
				//   isAdmin: false,
			});
		});
	}
}
