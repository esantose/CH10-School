import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './helper/angular-material/angular-material.module';
import { LayoutComponent } from './layout/layout.component';
import { Layout1Component } from './layout1/layout1.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentCrudComponent } from './components/students/student-crud/student-crud.component';
import { TeacherCrudComponent } from './components/teachers/teacher-crud/teacher-crud.component';
import { CourseCrudComponent } from './components/courses/course-crud/course-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Layout1Component,
    CoursesComponent,
    StudentsComponent,
    TeachersComponent,
    DashboardComponent,
    StudentCrudComponent,
    TeacherCrudComponent,
    CourseCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
