import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentCrudComponent } from './components/students/student-crud/student-crud.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'addstudent', component: StudentCrudComponent },
  { path: 'edit/:id', component: StudentCrudComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '**', component: StudentsComponent },
];

// const routes1: Routes = [
//   {
//     path: '',
//     component: HomePageComponent
//   },
//   {
//     path: 'home',
//     component: HomePageComponent
//   },
//   {
//     path: 'profile',
//     component: ProfileComponent
//   },

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
