import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [CoursesComponent, CourseCrudComponent],
	imports: [CommonModule, AngularMaterialModule, CoursesRoutingModule, ReactiveFormsModule],
})
export class CoursesModule {}
