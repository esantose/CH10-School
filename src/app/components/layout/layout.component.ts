import { IUser } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../../services/sesion.service';
import { Sesion } from '../../models/sesion';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	sesion$!: Observable<Sesion>;

	constructor(private router: Router, public sesionServ: SesionService) {}

	ngOnInit(): void {
		this.sesion$ = this.sesionServ.obtenerSesion();
		if (!this.sesionServ.isLoggedIn) {
			this.router.navigate(['auth/login']);
		}
	}

	login() {
		this.router.navigate(['auth/login']);
	}

	logout() {
		this.sesionServ.logout();
		this.router.navigate(['auth/login']);
	}
}
