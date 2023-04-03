import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';
import { selectSesionState } from 'src/app/features/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { AuthState } from '@root/features/auth/auth.reducer';

@Injectable({
	providedIn: 'root',
})
export class AdminGuard implements CanActivate {
	constructor(private authStore: Store<AuthState>, private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authStore.select(selectSesionState).pipe(
			map((sesion: Sesion) => {
				if (sesion.currentUser?.isAdmin) {
					return true;
				} else {
					alert('User has no rights');
					this.router.navigate(['inicio']);
					return false;
				}
				// return true;
			})
		);
	}
}
