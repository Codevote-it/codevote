import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SnippetComponent } from './snippet/snippet.component';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SectionComponent } from '../components/section/section.component';

const COMPONENTS = [
  ButtonComponent,
  SnippetComponent,
  RowComponent,
  ColComponent,
  UserProfileComponent,
  SectionComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, FormsModule, BrowserModule],
})
export class ComponentsModule {}
