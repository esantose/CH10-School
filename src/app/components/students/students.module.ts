import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsComponent } from './students.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { StudentStartComponent } from './student-start/student-start.component';

import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentService } from './../../services/student.service';

// import { FullNamePipe } from './../../pipes/fullname-pipe';
// import { TitleSizeDirective } from './../../directives/title-size.directive';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { studentStateFeatureKey, reducer } from './../../features/students/student-state.reducer';
import { StudentsEffects } from './../../features/students/student-state.effects';

@NgModule({
	// declarations: [StudentsComponent, StudentCrudComponent, FullNamePipe, TitleSizeDirective],
	// imports: [CommonModule, AngularMaterialModule, StudentsRoutingModule, ReactiveFormsModule, HttpClientModule],
	declarations: [StudentsComponent, StudentCrudComponent, StudentStartComponent],
	imports: [
		CommonModule,
		AngularMaterialModule,
		StudentsRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		StoreModule.forFeature(studentStateFeatureKey, reducer),
		EffectsModule.forFeature([StudentsEffects]),
	],
	providers: [StudentService],
})
export class StudentsModule {}
