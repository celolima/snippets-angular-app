import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { CursosComponent } from './data-binding/cursos/cursos.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CursoService } from './data-binding/cursos/curso.service';
import { CssComponent } from './css/css.component';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    DirectivesComponent,
    OutputPropertyComponent,    
    InputPropertyComponent,
    CssComponent,
    PipesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    TooltipModule.forRoot(),
    SharedModule
  ],
  providers: [CursoService, DatePipe, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
