import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { ContainerComponent } from './container';
import { ComponentsModule } from '@app/components';
import { AppRoutingModule } from '@app/routing';

const COMPONENTS = [HeaderComponent, FooterComponent, ContainerComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ComponentsModule, AppRoutingModule],
})
export class LayoutModule {}
