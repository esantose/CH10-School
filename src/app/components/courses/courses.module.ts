import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseCrudComponent } from './course-crud/course-crud.component';

@NgModule({
  declarations: [CoursesComponent, CourseCrudComponent],
  imports: [CommonModule],
})
export class CoursesModule {}
