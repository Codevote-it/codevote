import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/';
import { CodevoteComponent } from './codevote/';
import { ComponentsModule } from '../components/';

const COMPONENTS = [IndexComponent, CodevoteComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
