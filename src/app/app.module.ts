import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssComponent } from './components/css/css.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormModule } from './components/forms/form.module';
import { HomeComponent } from './components/home/home.component';
import { InputPropertyComponent } from './components/input-property/input-property.component';
import { LoginComponent } from './components/login/login.component';
import { OutputPropertyComponent } from './components/output-property/output-property.component';
import { PipesComponent } from './components/pipes/pipes.component';
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
  providers: [ DatePipe, { provide: LOCALE_ID, useValue: 'pt-BR' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
