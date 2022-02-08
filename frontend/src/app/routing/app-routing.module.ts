import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodevoteComponent, IndexComponent } from '@app/pages';
import { AppRoutingEnum } from './';

const routes: Routes = [
  { path: AppRoutingEnum.Index, component: IndexComponent },
  { path: AppRoutingEnum.Codevote, component: CodevoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
