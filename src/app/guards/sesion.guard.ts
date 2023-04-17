import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateChild,
	CanLoad,
	Route,
	Router,
	RouterStateSnapshot,
	UrlSegment,
	UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '@root/features/auth/auth.reducer';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { selectSesionState } from 'src/app/features/auth/auth.selectors';

@Injectable({
	providedIn: 'root',
})
export class SesionGuard implements CanActivate, CanActivateChild, CanLoad {
	constructor(private router: Router, private authStore: Store<AuthState>) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authStore.select(selectSesionState).pipe(
			map((sesion: Sesion) => {
				if (sesion.sesionActiva) {
					return true;
				} else {
					this.router.navigate(['auth/login']);
					return false;
				}
			})
		);
	}
	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authStore.select(selectSesionState).pipe(
			map((sesion: Sesion) => {
				if (sesion.sesionActiva) {
					return true;
				} else {
					this.router.navigate(['auth/login']);
					return false;
				}
			})
		);
		// return true;
	}
	canLoad(
		route: Route,
		segments: UrlSegment[]
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authStore.select(selectSesionState).pipe(
			map((sesion: Sesion) => {
				if (sesion.sesionActiva) {
					return true;
				} else {
					this.router.navigate(['auth/login']);
					return false;
				}
			})
		);
	}
}
