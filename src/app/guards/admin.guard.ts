import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';
import { selectSesionState } from 'src/app/features/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { AuthState } from '@root/features/auth/auth.reducer';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root',
})
export class AdminGuard implements CanActivate {
	constructor(private authStore: Store<AuthState>, private router: Router, private toastrService: ToastrService) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authStore.select(selectSesionState).pipe(
			map((sesion: Sesion) => {
				console.log('canActivate', sesion.currentUser);
				if (sesion.currentUser?.isAdmin) {
					return true;
				} else {
					this.toastrService.error('User does not have administrator permissions', 'Actions no allowed');
					// this.router.navigate(['inicio']);
					return false;
				}
				// return true;
			})
		);
	}
}
