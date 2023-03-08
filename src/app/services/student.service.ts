import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
	providedIn: 'root',
})
export class StudentService {
	apiUrl: string = 'http://localhost:3000/students';
	headers = new HttpHeaders().set('Content-Type', 'application/json');

	studentList: Student[] = [];
	// studentList1: Student[] = [
	// 	{
	// 		// id: 0,
	// 		firstname: 'Tomas',
	// 		lastname: 'Martinez',
	// 		birthdate: new Date('2001-10-05'),
	// 		email: 'abc@gmail.com',
	// 		gender: 'Masculino',
	// 	},
	// 	{
	// 		// id: 1,
	// 		firstname: 'Gary',
	// 		lastname: 'Schutz',
	// 		birthdate: new Date(),
	// 		email: 'abc1@gmail.com',
	// 		gender: 'Masculino',
	// 	},
	// 	{
	// 		// id: 2,
	// 		firstname: 'Maria',
	// 		lastname: 'Belen',
	// 		birthdate: new Date(),
	// 		email: 'abc2@gmail.com',
	// 		gender: 'Femenino',
	// 	},
	// 	{
	// 		// id: 3,
	// 		firstname: 'Edgardo',
	// 		lastname: 'Santos',
	// 		birthdate: new Date(),
	// 		email: 'efg@gmail.com',
	// 		gender: 'Masculino',
	// 	},
	// ];

	constructor(private httpClient: HttpClient) {}

	list(): Observable<any> {
		console.log('list,,', this.apiUrl);
		return this.httpClient.get(this.apiUrl).pipe(catchError(this.handleError));
	}
	create(data: any): Observable<any> {
		console.log('create1111', data);
		return this.httpClient.post(this.apiUrl, data).pipe(catchError(this.handleError));
	}
	getStudents() {
		return this.studentList.slice();
	}

	addStudent(student: Student) {
		console.log('studentList.lenth..', this.studentList.length);
		this.studentList.unshift(student);
		console.log('studentList.lenth..', this.studentList.length);
	}

	// removeStudent(index: number) {
	// 	this.studentList.splice(index, 1);
	// }

	delete(id: number): Observable<any> {
		const tmp = `${this.apiUrl}/${id}`;
		console.log(tmp);
		return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
	}

	// getStudent(index: number) {
	// 	return this.studentList[index];
	// }

	// Create new item
	getItem(id: any): Observable<any> {
		console.log('getItem..', id);
		return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
	}

	editStudent(student: Student, index: number) {
		this.studentList[index].firstname = student.firstname;
		this.studentList[index].lastname = student.lastname;
		this.studentList[index].birthdate = student.birthdate;
		this.studentList[index].gender = student.gender;
		this.studentList[index].email = student.email;
	}

	// Edit/ Update
	update(id: any, data: any): Observable<any> {
		return this.httpClient.put(`${this.apiUrl}/${id}`, data).pipe(catchError(this.handleError));
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
