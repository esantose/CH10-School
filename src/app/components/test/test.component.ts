import { Component } from '@angular/core';
import { SesionService } from '@root/services/sesion.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss'],
})
export class TestComponent {
	constructor(public authService: SesionService) {}

	logout(): void {
		this.authService.logoutTest();
	}
}
