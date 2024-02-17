import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-validated-game',
  templateUrl: './dialog-validated-game.component.html',
  styleUrls: ['./dialog-validated-game.component.css']
})
export class DialogValidatedGameComponent {

  gameOption: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: { gameOption: string }) {

    if (data.gameOption.length > 0) {
        this.gameOption = data.gameOption;
    } 
  }
}
