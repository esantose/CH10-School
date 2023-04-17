import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularMaterialModule } from './shared/angular-material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		DashboardComponent,
		InicioComponent,
		ContactComponent,
		AboutComponent,
		TestComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		// AngularMaterialModule,
		// ReactiveFormsModule,
		SharedModule,
		StoreModule.forRoot({}, {}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		EffectsModule.forRoot([]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
