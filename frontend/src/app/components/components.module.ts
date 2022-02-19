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
  ModalComponent,
  ContainerComponent,
  EditSnippetComponent,
  EditTitleComponent,
  FooterComponent,
  HeaderComponent,
} from './';

const COMPONENTS = [
  ButtonComponent,
  ColComponent,
  ContainerComponent,
  EditSnippetComponent,
  EditTitleComponent,
  FooterComponent,
  HeaderComponent,
  SnippetComponent,
  RowComponent,
  UserProfileComponent,
  SectionComponent,
  InputComponent,
  ModalComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, FormsModule, BrowserModule],
})
export class ComponentsModule {}
