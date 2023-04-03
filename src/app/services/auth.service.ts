import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { SesionService } from '@root/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { IUser } from 'src/app/models/user';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	apiUrl: string = 'http://localhost:3000/users';

	rslt1: boolean = false;
	private userExists: boolean = false;

	constructor(private httpClient: HttpClient, private sesion: SesionService) {}

	login(user: IUser): Observable<Sesion> {
		return this.httpClient.get<IUser[]>(this.apiUrl).pipe(
			map((usuarios: IUser[]) => {
				let usuarioValidado = usuarios.find((u: IUser) => u.email === user.email && u.password === user.password);

				if (usuarioValidado) {
					const sesion: Sesion = {
						sesionActiva: true,
						currentUser: usuarioValidado,
					};

					return sesion;
				} else {
					const sesion: Sesion = {
						sesionActiva: false,
					};

					return sesion;
				}
			})
		);
	}

	isUserRegisted(email: any): boolean {
		let rslt: boolean = false;
		const urlEmail = `${this.apiUrl}?email=${email}`;
		console.log('urlEmail: ', urlEmail);
		this.httpClient.get(urlEmail).subscribe({
			next: (res: any) => {
				console.log('res.length: ', res.length);
				rslt = res.length <= 0 ? false : true;
				console.log('rslt: ', rslt);
			},
		});
		return rslt;
	}

	getUserByEmail(email: any): Observable<any> {
		// const urlEmail = `${this.apiUrl}/${email}`;
		const urlEmail = `${this.apiUrl}?email=${email}`;
		return this.httpClient.get(urlEmail).pipe(catchError(this.handleError));
		// return this.httpClient.get(this.apiUrl + '/' + data, data).pipe(catchError(this.handleError));
	}

	createUser(data: any): Observable<any> {
		console.log('createUser', data);
		return this.httpClient.post(this.apiUrl, data).pipe(catchError(this.handleError));
	}

	// Handle API errors
	handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
		}
		return throwError('Something bad happened; please try again later.');
	}
}
