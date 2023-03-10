import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthStartComponent } from './auth-start/auth-start.component';

import { AngularMaterialModule } from './../shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [LoginComponent, AuthStartComponent], // [LoginComponent],
	imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, AngularMaterialModule],
})
export class AuthModule {}
