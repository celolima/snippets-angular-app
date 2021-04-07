import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './components/css/css.component';
import { CursosComponent } from './components/cursos/cursos.component';

import { DirectivesComponent } from './components/directives/directives.component';
import { HeroFormComponent } from './components/forms/hero-form/hero-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [ 
    { path: 'dataBinding', component: CursosComponent, canActivate: [AuthGuard] },
    { path: 'directives', component: DirectivesComponent, canActivate: [AuthGuard] },
    { path: 'css', component: CssComponent, canActivate: [AuthGuard] },
    { path: 'pipes', component: PipesComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'hForm', component: HeroFormComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'hForm', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
