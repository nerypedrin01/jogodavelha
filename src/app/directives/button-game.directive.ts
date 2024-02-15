import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';
import { Opiton } from '../model/opiton.model';

@Directive({
  selector: '[appButtonGame]'
})
export class ButtonGameDirective implements AfterViewInit {

  private opX: Opiton = {
    texButon: 'X',
    colorTextButton: 'red'
  };;
  private opO: Opiton = {
    texButon: 'O',
    colorTextButton: 'green'
  };;

  ngAfterViewInit(){
    this.load(true);
  }
  constructor(private el: ElementRef) {
  }

  @HostListener('click')
  onClick() {
    let container = this.el.nativeElement as HTMLElement;
    
    
  }

  load(playedLast: boolean) {
    this.opX.lastPlayed = playedLast;
    this.opO.lastPlayed = !playedLast;
    console.log(playedLast, !playedLast)

  }


}
