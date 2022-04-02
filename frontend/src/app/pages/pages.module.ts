import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, CodevoteComponent, CreateComponent } from '@app/pages';
import { ComponentsModule } from '@app/components';
import { LibraryComponent } from './library/library.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  HomeComponent,
  CodevoteComponent,
  CreateComponent,
  LibraryComponent,
  NotFoundComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ComponentsModule, RouterModule],
})
export class PagesModule {}
