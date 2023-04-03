import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';
import { catchError, Observable, throwError } from 'rxjs';

import { Student } from '../models/student';
import { env } from 'src/environment/environment';

@Injectable()
export class StudentService {
	apiUrl: string = 'http://localhost:3000/students';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private httpClient: HttpClient) {}

	getStudents(): Observable<Student[]> {
		return this.httpClient
			.get<Student[]>(this.apiUrl, {
				headers: new HttpHeaders({
					'content-type': 'application/json',
					encoding: 'UTF-8',
				}),
			})
			.pipe(catchError(this.handleError));
	}

	create(data: any): Observable<any> {
		return this.httpClient.post(this.apiUrl, data).pipe(catchError(this.handleError));
	}

	// delete(id: number): Observable<any> {
	// 	const tmp = `${this.apiUrl}/${id}`;
	// 	console.log(tmp);
	// 	return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
	// }

	deleteStudent(student: Student): Observable<Student> {
		return this.httpClient
			.delete<Student>(`${env.apiUrl}/${student.id}`, {
				headers: new HttpHeaders({
					student: 'Gary',
				}),
			})
			.pipe(catchError(this.handleError));
	}

	// getStudent(index: number) {
	// 	return this.studentList[index];
	// }

	// Create new item
	getItem(id: any): Observable<any> {
		return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
	}

	// Edit/ Update
	// update(id: any, data: any): Observable<any> {
	// 	return this.httpClient.put(`${this.apiUrl}/${id}`, data).pipe(catchError(this.handleError));
	// }

	editStudent(student: Student): Observable<Student> {
		return this.httpClient
			.put<Student>(`${env.apiUrl}/${student.id}`, student, {
				headers: new HttpHeaders({
					student: 'Gary',
				}),
			})
			.pipe(catchError(this.handleError));
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
