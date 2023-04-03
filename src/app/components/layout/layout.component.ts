import { IUser } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './../../features/auth/auth.reducer';
import { selectSesionActiva, selectCurrentUser } from './../../features/auth/auth.selectors';
import { SesionService } from '../../services/sesion.service';
import { Sesion } from '../../models/sesion';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	sesion$!: Observable<Sesion>;
	sesionActiva$!: Observable<Boolean>;
	currentUser$!: Observable<IUser | undefined>;

	constructor(private router: Router, private authStore: Store<AuthState>, private sesion: SesionService) {}

	ngOnInit(): void {
		this.sesion$ = this.sesion.obtenerSesion();
		this.sesionActiva$ = this.authStore.select(selectSesionActiva);
		this.currentUser$ = this.authStore.select(selectCurrentUser);
	}

	logout() {
		let sesionLogout: Sesion = {
			sesionActiva: false,
			currentUser: undefined,
		};
		this.sesion.logout(sesionLogout);
		this.router.navigate(['auth/login']);
	}

	redigirInicio() {
		this.router.navigate(['start']);
	}
}
