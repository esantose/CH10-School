import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: '', component: StudentsComponent },
//   { path: 'add', component: StudentCrudComponent },
//   { path: 'edit/:id', component: StudentCrudComponent },
//   { path: '**', component: StudentsComponent },
// ];

@NgModule({
  declarations: [StudentsComponent, StudentCrudComponent],
  // imports: [CommonModule, AngularMaterialModule],
  imports: [CommonModule, AngularMaterialModule, StudentsRoutingModule],
  // exports: [RouterModule],
})
export class StudentsModule {}
