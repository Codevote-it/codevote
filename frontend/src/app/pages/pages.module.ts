import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CodevoteComponent } from './codevote/codevote.component';
import { ComponentsModule } from '../components/components.module';

const COMPONENTS = [IndexComponent, CodevoteComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
