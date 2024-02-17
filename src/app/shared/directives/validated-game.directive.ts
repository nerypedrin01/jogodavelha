import { GameComponent } from './../../components/game/game.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Directive, ElementRef, HostBinding, HostListener, QueryList, OnInit } from '@angular/core';
import { Play } from '../../model/play.model';
import { DialogValidatedGameComponent } from './components/dialog-validated-game/dialog-validated-game.component';
import { Opiton } from 'src/app/model/option.model';

@Directive({
  selector: '[appValidatedGame]'
})
export class ValidatedGameDirective {

  constructor(private el: ElementRef, private dialog: MatDialog) { }
  @HostListener('click')
  onClick() {
    let container = this.el.nativeElement as HTMLElement;
    let butons = Array.from(container.getElementsByTagName('button'));

    let plays: Array<Play>;

    if (verifyGame([butons[0], butons[1], butons[2]])) {
      this.dialog.open(DialogValidatedGameComponent, {
        height: '200px',
        width: '200px',
        data: {
          gameOption: butons[0].textContent
        }

      }

      );

      console.log('ganhou');

    } else if (verifyGame([butons[3], butons[4], butons[5]])) {
      this.dialog.open(DialogValidatedGameComponent, {
        height: '200px',
        width: '200px',
      });
      console.log('ganhou');
    } else if (verifyGame([butons[6], butons[7], butons[8]])) {
      console.log('ganhou');
    } else if (verifyGame([butons[0], butons[3], butons[6]])) {
      console.log('ganhou');
    } else if (verifyGame([butons[1], butons[4], butons[7]])) {
      console.log('ganhou');
    } else if (verifyGame([butons[2], butons[5], butons[8]])) {
      console.log('ganhou');
    } else if (verifyGame([butons[0], butons[4], butons[8]])) {
      console.log('ganhou');
    } else if (verifyGame([butons[2], butons[4], butons[6]])) {
      console.log('ganhou');
    } else {
      console.log('Deu Velha');

    }



  }

}
function verifyGame(buttons: Array<HTMLButtonElement>): boolean {
  return buttons[0].textContent.length > 0 && buttons[1].textContent == buttons[0].textContent && buttons[2].textContent == buttons[0].textContent;
}


