import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodevoteComponent, CreateComponent, HomeComponent } from '@app/pages';
import { AppRoutingEnum } from './';

const routes: Routes = [
  { path: AppRoutingEnum.Home, component: HomeComponent },
  {
    path: `${AppRoutingEnum.Codevote}/:${AppRoutingEnum.CodevoteSegment1}`,
    component: CodevoteComponent,
  },
  { path: AppRoutingEnum.Create, component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
