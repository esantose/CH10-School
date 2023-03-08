import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeacherCrudComponent } from './teacher-crud/teacher-crud.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [TeachersComponent, TeacherCrudComponent],
	imports: [CommonModule, AngularMaterialModule, TeachersRoutingModule, ReactiveFormsModule],
})
export class TeachersModule {}
