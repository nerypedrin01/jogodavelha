import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ValidatedGameDirective } from './shared/directives/validated-game.directive';
import { ButtonGameDirective } from './shared/directives/button-game.directive';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ValidatedGameDirective,
    ButtonGameDirective,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
