import { Opiton } from './../model/opiton.model';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValidatedGame]'
})
export class ValidatedGameDirective {

  constructor(private el: ElementRef) { }


}
