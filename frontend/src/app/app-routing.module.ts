import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodevoteComponent } from './pages/codevote/codevote.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'codevote', component: CodevoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
