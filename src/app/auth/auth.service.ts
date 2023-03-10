import { Injectable } from '@angular/core';
import { SesionService } from 'src/app/auth/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { IUser } from 'src/app/models/user';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private sesion: SesionService) {}

	login(user: IUser) {
		let sesion: Sesion = {
			sesionActiva: true,
			usuarioActivo: user,
		};

		this.sesion.crearSesion(sesion);
	}
}
