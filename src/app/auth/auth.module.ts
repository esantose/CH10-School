import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthStartComponent } from './auth-start/auth-start.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from '../components/profile/profile.component';

import { AngularMaterialModule } from '../shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer } from './../features/auth/auth.reducer';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [LoginComponent, RegisterComponent, AuthStartComponent, ProfileComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		ReactiveFormsModule,
		AngularMaterialModule,
		SharedModule,
		StoreModule.forFeature(authFeatureKey, authReducer),
	],
})
export class AuthModule {}
