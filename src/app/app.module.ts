import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ValidatedGameDirective } from './directives/validated-game.directive';
import { ButtonGameDirective } from './directives/button-game.directive';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ValidatedGameDirective,
    ButtonGameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
