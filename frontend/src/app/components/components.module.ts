import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
  FooterComponent,
  HeaderComponent,
  NavigationListComponent,
  NavigationListItemComponent,
  CreatorComponent,
  SnippetBarComponent,
  SnippetLoveButtonComponent,
  SnippetEditButtonComponent,
  SnippetPercentageComponent,
  TextareaComponent,
  TabsComponent,
  TabsContentComponent,
  CodeComponent,
  SnippetPreviewComponent,
  HorizontalScrollComponent,
  ToasterComponent,
  LoaderComponent,
  SpinnerComponent,
  SkeletonComponent,
} from './';

const COMPONENTS = [
  ButtonComponent,
  ColComponent,
  ContainerComponent,
  FooterComponent,
  HeaderComponent,
  SnippetComponent,
  RowComponent,
  UserProfileComponent,
  SectionComponent,
  InputComponent,
  ModalComponent,
  CreatorComponent,
  NavigationListComponent,
  NavigationListItemComponent,
  SnippetBarComponent,
  SnippetLoveButtonComponent,
  SnippetEditButtonComponent,
  SnippetPercentageComponent,
  TextareaComponent,
  TabsComponent,
  TabsContentComponent,
  CodeComponent,
  SnippetPreviewComponent,
  HorizontalScrollComponent,
  ToasterComponent,
  LoaderComponent,
  SpinnerComponent,
  SkeletonComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    FontAwesomeModule,
  ],
})
export class ComponentsModule {}
