import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { ContainerComponent } from './container';
import { ComponentsModule } from '@app/components';

const COMPONENTS = [HeaderComponent, FooterComponent, ContainerComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ComponentsModule],
})
export class LayoutModule {}
