import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [StudentsComponent, StudentCrudComponent],
	imports: [CommonModule, AngularMaterialModule, StudentsRoutingModule, ReactiveFormsModule, HttpClientModule],
})
export class StudentsModule {}
