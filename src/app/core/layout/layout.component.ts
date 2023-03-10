import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from './../../auth/sesion.service';
// import { Curso } from './models/curso';
import { Sesion } from '../../models/sesion';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	sesion$!: Observable<Sesion>;

	constructor(private router: Router, private sesion: SesionService) {}

	ngOnInit(): void {
		this.sesion$ = this.sesion.obtenerSesion();
	}

	logout() {
		let sesionLogout: Sesion = {
			sesionActiva: false,
			usuarioActivo: undefined,
		};
		this.sesion.logout(sesionLogout);
		this.router.navigate(['auth/login']);
	}
}
