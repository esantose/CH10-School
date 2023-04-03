import { Directive, ElementRef, Renderer2 } from '@angular/core';
// @Directive({
// 	selector: '[appChangeColor]', // Directive selector
// })
@Directive({
	selector: '[appTitleSize]',
})
export class TitleSizeDirective {
	constructor(elem: ElementRef, renderer: Renderer2) {
		renderer.setStyle(elem.nativeElement, 'font-size', '20px');
	}
}
