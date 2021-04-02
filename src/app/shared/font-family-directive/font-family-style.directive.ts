import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fontFamilyStyle]'
})
export class FontFamilyStyleDirective {

  constructor(private elementRef: ElementRef,
    private _render: Renderer2) { 
      this._render.setStyle(elementRef.nativeElement,'font-family','"New Tegomin", serif');
    }

}
