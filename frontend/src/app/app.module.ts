import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/routing';
import { AppComponent } from './app.component';
import { PagesModule } from '@app/pages';
import { AppStoreModule } from '@app/app-store';
import { ComponentsModule } from './components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AppStoreModule,
    ComponentsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
