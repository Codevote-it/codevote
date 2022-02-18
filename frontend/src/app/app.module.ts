import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/routing';
import { AppComponent } from './app.component';
import { LayoutModule } from '@app/layout';
import { PagesModule } from '@app/pages';
import { AppStoreModule } from '@app/app-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    LayoutModule,
    AppStoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
