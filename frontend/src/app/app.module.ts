import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { CodevoteComponent } from './pages/codevote/codevote.component';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
