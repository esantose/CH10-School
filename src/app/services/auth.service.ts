import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { SesionService } from '@root/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { IUser } from 'src/app/models/user';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	apiUrl: string = 'http://localhost:3000/users';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private httpClient: HttpClient, private sesionServ: SesionService) {}

	login(user: IUser): Observable<Sesion> {
		return this.httpClient.get<IUser[]>(this.apiUrl).pipe(
			map((users: IUser[]) => {
				let sesionLogin: Sesion = {
					sesionActiva: false,
					currentUser: undefined,
				};
				let userValid = users.find((u: IUser) => u.email === user.email && u.password === user.password);
				if (userValid) {
					sesionLogin.sesionActiva = true;
					sesionLogin.currentUser = userValid;
					this.sesionServ.crearSesion(sesionLogin);
				}
				return sesionLogin;
			})
		);
	}

	getUsers(): Observable<IUser[]> {
		return this.httpClient
			.get<IUser[]>(this.apiUrl, {
				headers: new HttpHeaders({
					'content-type': 'application/json',
					encoding: 'UTF-8',
				}),
			})
			.pipe(catchError(this.handleError));
	}

	createUser(data: any): Observable<any> {
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
