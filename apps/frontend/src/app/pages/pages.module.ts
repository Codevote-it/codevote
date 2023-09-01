import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HomeComponent,
  CodevoteComponent,
  CreateComponent,
  LibraryComponent,
  NotFoundComponent,
} from '@app/pages';
import { ComponentsModule } from '@app/components';
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
