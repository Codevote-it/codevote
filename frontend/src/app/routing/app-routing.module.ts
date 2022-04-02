import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CodevoteComponent,
  CodevoteParamsEnum,
  CreateComponent,
  HomeComponent,
  LibraryComponent,
  LibraryParamsEnum,
  NotFoundComponent,
} from '@app/pages';
import { AppRoutingEnum } from './';

const routes: Routes = [
  { path: AppRoutingEnum.Home, component: HomeComponent },
  { path: AppRoutingEnum.Create, component: CreateComponent },
  {
    path: `${AppRoutingEnum.Codevote}/:${CodevoteParamsEnum.Segment1}`,
    component: CodevoteComponent,
  },
  {
    path: `${AppRoutingEnum.Library}/:${LibraryParamsEnum.Segment1}`,
    component: LibraryComponent,
  },
  { path: AppRoutingEnum.NotFound, component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
