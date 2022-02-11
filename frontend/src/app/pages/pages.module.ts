import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent, CodevoteComponent, CreateComponent } from '@app/pages';
import { ComponentsModule } from '@app/components';
import { ModalsModule } from '@app/modals';

const COMPONENTS = [HomeComponent, CodevoteComponent, CreateComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ComponentsModule, ModalsModule],
})
export class PagesModule {}
