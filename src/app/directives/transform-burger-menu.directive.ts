import {Directive, ElementRef, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appTransformBurgerBtn]'
})
export class TransformBurgerMenuDirective {

  constructor(btn: ElementRef) {
    console.log(btn);
  }

}
