import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
	loadAuths$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(AuthActions.loadSesion), //.loadAuths),
			/** An EMPTY observable only emits completion. Replace with your own observable API request */
			concatMap(() => EMPTY as Observable<{ type: string }>)
		);
	});

	// https://dev.to/this-is-angular/ngrx-use-cases-part-i-restricting-access-30lo
	// on login, send auth data to backend,
	// get the token and put into the store and cookies
	// login$ = createEffect(() => {
	//   return this.actions$.pipe(
	//     ofType(AuthActions.login),
	//     mergeMap(({ email, password }) => {
	//       return this.authService.login(email, password).pipe(
	//         tap(({ token }) => this.cookieService.set("token", token)),
	//         map(({ token }) => setToken({ token })),
	//         catchError(() => of(loginError({ message: "Login failed" })))
	//       );
	//     })
	//   );
	// });

	constructor(private actions$: Actions) {}

	// constructor(
	//   private readonly actions$: Actions,
	//   private readonly authService: AuthService,
	//   private readonly router: Router,
	//   private readonly cookieService: CookieService
	// ) {}
}
