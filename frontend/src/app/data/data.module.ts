import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './authentication/store/authentication.effects';
import { appReducers } from './app.state';
import { CodevoteEffects } from './codevote';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AuthenticationEffects, CodevoteEffects]),
  ],
})
export class DataModule {}
