import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';

import { CssComponent } from './components/css/css.component';

import { SharedModule } from './shared/shared.module';
import { PipesComponent } from './components/pipes/pipes.component';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { OutputPropertyComponent } from './components/output-property/output-property.component';
import { InputPropertyComponent } from './components/input-property/input-property.component';
import { CursoService } from './components/cursos/curso.service';
import { LoginComponent } from './components/login/login.component';
import { FormModule } from './components/forms/form.module';
import { AddressService } from './shared/address/address.service';

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
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    FormModule
  ],
  providers: [CursoService, DatePipe, { provide: LOCALE_ID, useValue: 'pt-BR' }, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
