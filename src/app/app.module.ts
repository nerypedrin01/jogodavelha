import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ButtonGameDirective } from './shared/directives/button-game.directive';
import { ValidatedGameDirective } from './shared/directives/validated-game.directive';
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
