import { Injectable } from '@angular/core';
import { ICourse } from '../models/course';

@Injectable({
	providedIn: 'root',
})
export class CourseService {
	courseList: ICourse[] = [
		{
			id: 1,
			name: 'Angular',
			description: 'Front End Angular',
		},
		{
			id: 2,
			name: 'React',
			description: 'Front End React',
		},
		{
			id: 3,
			name: 'Vue',
			description: '',
		},
		{
			id: 4,
			name: 'C#',
			description: '',
		},
		{
			id: 5,
			name: 'MVC',
			description: '',
		},
		{
			id: 6,
			name: 'SQL',
			description: '',
		},
		{
			id: 7,
			name: 'AWS',
			description: '',
		},
		{
			id: 8,
			name: 'iCoud',
			description: '',
		},
	];
	constructor() {}

	getCourses() {
		return this.courseList.slice();
	}

	addCourse(course: ICourse) {
		this.courseList.unshift(course);
	}

	removeCourse(index: number) {
		this.courseList.splice(index, 1);
	}

	getCourse(index: number) {
		return this.courseList[index];
	}

	editCourse(course: ICourse, index: number) {
		this.courseList[index].id = course.id;
		this.courseList[index].name = course.name;
		this.courseList[index].description = course.description;
	}
}
