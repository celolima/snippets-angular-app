import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { CursosComponent } from './data-binding/cursos/cursos.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [ 
    { path: 'dataBinding', component: CursosComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'css', component: CssComponent },
    { path: 'pipes', component: PipesComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
