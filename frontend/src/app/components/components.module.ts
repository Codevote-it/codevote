import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  ButtonComponent,
  SnippetComponent,
  RowComponent,
  ColComponent,
  UserProfileComponent,
  SectionComponent,
  InputComponent,
} from './';

const COMPONENTS = [
  ButtonComponent,
  SnippetComponent,
  RowComponent,
  ColComponent,
  UserProfileComponent,
  SectionComponent,
  InputComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, FormsModule, BrowserModule],
})
export class ComponentsModule {}
