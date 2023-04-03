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

	constructor() {
		let sesion: Sesion = {
			sesionActiva: false,
		};
		this.sesion$ = new BehaviorSubject<Sesion>(sesion);
	}
	crearSesion(sesion: Sesion) {
		console.log('Creando sesion con el objeto', sesion);

		localStorage.setItem('email', sesion.currentUser?.email || '');
		this.sesion$.next(sesion);
	}

	obtenerSesion(): Observable<Sesion> {
		return this.sesion$.asObservable();
	}

	logout(sesion: Sesion) {
		this.sesion$.next(sesion);
	}
}
