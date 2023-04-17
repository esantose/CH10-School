import { Injectable } from '@angular/core';
// import { IUser } from '@root/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';

@Injectable({
	providedIn: 'root',
})
export class SesionService {
	next(sesion: Sesion) {
		throw new Error('Method not implemented.');
	}
	sesion$: BehaviorSubject<Sesion>;
	sesionActiva$ = new BehaviorSubject<boolean>(false);
	currentSesion: Sesion | undefined;
	isLoggedIn$: BehaviorSubject<boolean> | undefined;
	isLoggedIn: boolean = false;

	constructor() {
		let sesion: Sesion = {
			sesionActiva: false,
		};
		this.sesion$ = new BehaviorSubject<Sesion>(sesion);
	}
	crearSesion(sesion: Sesion) {
		localStorage.setItem('email', sesion.currentUser?.email || '');
		this.isLoggedIn = true;
		this.currentSesion = sesion;
		this.sesionActiva$.next(true);
		this.sesion$.next(sesion);
	}

	obtenerSesion(): Observable<Sesion> {
		return this.sesion$.asObservable();
	}

	// logout(sesion: Sesion) {
	logout() {
		let sesionLogout: Sesion = {
			sesionActiva: false,
			currentUser: undefined,
		};
		this.isLoggedIn = false;
		this.sesion$.next(sesionLogout);
	}
	logoutTest() {
		// this.sesion$.next(sesion);
	}

	getCurrentSession() {
		let currentSesion: Sesion = {
			sesionActiva: false,
			currentUser: undefined,
		};

		this.sesion$.subscribe((sesion: Sesion) => {
			// if (sesion.currentUser?.isAdmin) {
			// 	return true;
			// } else {
			// 	alert('User has no rights');
			// 	return false;
			// }
			currentSesion = sesion;
		});
		return currentSesion;
	}
}
