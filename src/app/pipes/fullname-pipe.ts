import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '@root/models/student';

@Pipe({
	name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
	transform(value: any, fname: any, lname: any): string {
		return fname + ' ' + lname;
	}
}
