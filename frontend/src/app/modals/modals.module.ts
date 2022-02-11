import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTitleComponent } from './edit-title/edit-title.component';
import { EditSnippetComponent } from './edit-snippet/edit-snippet.component';
import { ComponentsModule } from '@app/components';

const MODALS = [EditTitleComponent, EditSnippetComponent];

@NgModule({
  declarations: [...MODALS],
  exports: [...MODALS],
  imports: [CommonModule, ComponentsModule],
})
export class ModalsModule {}
