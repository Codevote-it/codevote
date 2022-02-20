import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, CodevoteComponent, CreateComponent } from '@app/pages';
import { ComponentsModule } from '@app/components';

const COMPONENTS = [HomeComponent, CodevoteComponent, CreateComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
