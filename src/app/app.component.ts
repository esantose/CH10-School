import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from './services/sesion.service';
import { Sesion } from './models/sesion';
import { ToastrService } from 'ngx-toastr';
import { IUser } from './models/user';
import { AuthState } from './features/auth/auth.reducer';
import { Store } from '@ngrx/store';
import { selectSesionActiva, selectCurrentUser } from './features/auth/auth.selectors';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'CodeHouse';
	// sesion$!: Observable<Sesion>;
	sesionActiva$!: Observable<Boolean>;
	usuarioActivo$!: Observable<IUser | undefined>;

	constructor(
		private router: Router,
		// private sesion: SesionService,
		private authStore: Store<AuthState>,
		private toastrService: ToastrService
	) {}

	ngOnInit(): void {
		// this.sesion$ = this.sesion.obtenerSesion();
		this.sesionActiva$ = this.authStore.select(selectSesionActiva);
		this.usuarioActivo$ = this.authStore.select(selectCurrentUser);
	}

	redigirInicio() {
		this.router.navigate(['start']);
	}

	// public showSuccess(): void {
	// 	this.toastrService.success('Message Success!', 'Title Success!');
	// }

	// public showInfo(): void {
	// 	this.toastrService.info('Message Info!', 'Title Info!');
	// }

	// public showWarning(): void {
	// 	this.toastrService.warning('Message Warning!', 'Title Warning!');
	// }

	// public showError(): void {
	// 	this.toastrService.error('Message Error!', 'Title Error!');
	// }
}
