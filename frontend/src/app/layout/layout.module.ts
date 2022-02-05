import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { ComponentsModule } from '../components/components.module';

const COMPONENTS = [HeaderComponent, FooterComponent, ContainerComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ComponentsModule],
})
export class LayoutModule {}
