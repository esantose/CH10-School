import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
	declarations: [],
	imports: [
		ReactiveFormsModule,
		AngularMaterialModule,
		ToastrModule.forRoot({
			timeOut: 6000, // 6 seconds
			closeButton: true,
			progressBar: true,
		}),
	],
	exports: [ReactiveFormsModule, AngularMaterialModule],
})
export class SharedModule {}
