import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';

@NgModule({
  declarations: [StudentsComponent, StudentCrudComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class StudentsModule {}
