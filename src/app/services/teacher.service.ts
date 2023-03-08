import { Injectable } from '@angular/core';
import { ITeacher } from '../models/teacher';

@Injectable({
	providedIn: 'root',
})
export class TeacherService {
	teacherList: ITeacher[] = [
		{
			firstname: 'Juan',
			lastname: 'Martinez',
			birthdate: new Date('2001-10-05'),
			email: 'abc@gmail.com',
			gender: 'Masculino',
		},
		{
			firstname: 'Miguel',
			lastname: 'Santos',
			birthdate: new Date(),
			email: 'efg@gmail.com',
			gender: 'Masculino',
		},
		{
			firstname: 'Santiago',
			lastname: 'Schutz',
			birthdate: new Date(),
			email: 'abc1@gmail.com',
			gender: 'Masculino',
		},
		{
			firstname: 'Zacarias',
			lastname: 'Belen',
			birthdate: new Date(),
			email: 'abc2@gmail.com',
			gender: 'Femenino',
		},
		{
			firstname: 'Juana',
			lastname: 'Santos',
			birthdate: new Date(),
			email: 'efg@gmail.com',
			gender: 'Masculino',
		},
		{
			firstname: 'Mariana',
			lastname: 'Schutz',
			birthdate: new Date(),
			email: 'abc1@gmail.com',
			gender: 'Femenino',
		},
		{
			firstname: 'Rita',
			lastname: 'Belen',
			birthdate: new Date(),
			email: 'abc2@gmail.com',
			gender: 'Femenino',
		},
		{
			firstname: 'Paula',
			lastname: 'Santos',
			birthdate: new Date(),
			email: 'efg@gmail.com',
			gender: 'Femenino',
		},
		{
			firstname: 'Susana',
			lastname: 'Schutz',
			birthdate: new Date(),
			email: 'abc1@gmail.com',
			gender: 'Femenino',
		},
		{
			firstname: 'Maria',
			lastname: 'Belen',
			birthdate: new Date(),
			email: 'abc2@gmail.com',
			gender: 'Femenino',
		},
		{
			firstname: 'Jacqueline',
			lastname: 'Santos',
			birthdate: new Date(),
			email: 'efg@gmail.com',
			gender: 'Masculino',
		},
		{
			firstname: 'Rosario',
			lastname: 'Schutz',
			birthdate: new Date(),
			email: 'abc1@gmail.com',
			gender: 'Masculino',
		},
		{
			firstname: 'Claudia',
			lastname: 'Belen',
			birthdate: new Date(),
			email: 'abc2@gmail.com',
			gender: 'Femenino',
		},
		{
			firstname: 'Vicky',
			lastname: 'Carbajal',
			birthdate: new Date(),
			email: 'efg@gmail.com',
			gender: 'Masculino',
		},
		{
			firstname: 'Julia',
			lastname: 'Zapata',
			birthdate: new Date(),
			email: 'abc1@gmail.com',
			gender: 'Masculino',
		},
		{
			firstname: 'Cecilia',
			lastname: 'Guerrero',
			birthdate: new Date(),
			email: 'abc2@gmail.com',
			gender: 'Femenino',
		},
	];

	constructor() {}

	getTeachers() {
		return this.teacherList.slice();
	}

	addTeacher(teacher: ITeacher) {
		this.teacherList.unshift(teacher);
	}

	removeTeacher(index: number) {
		this.teacherList.splice(index, 1);
	}

	getTeacher(index: number) {
		return this.teacherList[index];
	}

	editTeacher(teacher: ITeacher, index: number) {
		this.teacherList[index].firstname = teacher.firstname;
		this.teacherList[index].lastname = teacher.lastname;
		this.teacherList[index].birthdate = teacher.birthdate;
		this.teacherList[index].gender = teacher.gender;
		this.teacherList[index].email = teacher.email;
	}
}
