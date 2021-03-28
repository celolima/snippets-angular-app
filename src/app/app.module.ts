import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { ColumnCardComponent } from './column-card/column-card.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { CursosComponent } from './cursos/cursos.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CursoService } from './cursos/curso.service';
import { FontFamilyStyleDirective } from './shared/font-family-style.directive';
import { CssComponent } from './css/css.component';
import { PipesComponent } from './pipes/pipes.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { JustifyContentTypes } from './css/justify-content-types';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    DirectivesComponent,
    OutputPropertyComponent,    
    InputPropertyComponent,
    ColumnCardComponent,
    FontFamilyStyleDirective,
    CssComponent,
    PipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [CursoService, DatePipe, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
