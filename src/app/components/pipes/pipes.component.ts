import { Component, OnInit } from '@angular/core';
import { CursoService } from '../cursos/curso.service';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  book: any = {
    title   : 'NG-BOOK 2: THE COMPLETE BOOK ON ANGULAR 2',
    editora : 'Fullstack.IO',
    idioma  : 'Inglês',
    ISBN10  : '0991344618',
    ISBN13  : '978-0991344611',
    price   : 44.99,
    release : new Date(2016,10,29),
    dimesao : '21.59 x 3.58 x 27.94 cm',
  };

  text: string;
  asyncCursos: String[];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.getAsyncText().then(resolve => this.text = resolve.toString());
    this.getAsyncCursos().then(resolve => this.asyncCursos = resolve);
  }

  getAsyncCursos(){
    return this.cursoService.getAsyncCursos();
  }

  getAsyncText() {
    return this.cursoService.getAsyncText();
  }

}
