import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';
import { StudentsModule } from './components/students/students.module';
import { TeachersModule } from './components/teachers/teachers.module';
import { CoursesModule } from './components/courses/courses.module';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent, LayoutComponent, DashboardComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AngularMaterialModule,
		ReactiveFormsModule,
		StudentsModule,
		TeachersModule,
		CoursesModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
