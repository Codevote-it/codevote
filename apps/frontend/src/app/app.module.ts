import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/routing';
import { AppComponent } from './app.component';
import { PagesModule } from '@app/pages';
import { DataModule } from '@app/data';
import { ComponentsModule } from '@app/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    DataModule,
    ComponentsModule,
    FontAwesomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
