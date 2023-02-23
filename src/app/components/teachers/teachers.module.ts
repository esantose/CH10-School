import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { TeacherCrudComponent } from './teacher-crud/teacher-crud.component';

@NgModule({
  declarations: [TeachersComponent, TeacherCrudComponent],
  imports: [CommonModule],
})
export class TeachersModule {}
