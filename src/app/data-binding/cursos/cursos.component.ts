import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  linkCursos: String = 'http://www.google.com.br'

  cursos: String[]

  isOver :boolean = false

  person :any = {
    name: '',
    age: null
  };

  newValueFromChild: number

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

  alertMe() {
    alert('Alert me!')
  }

  onOverMe() {
    this.isOver = !this.isOver
  }

  getEmit(event) {
    this.newValueFromChild = event
  }

  addCurso(curso: string) {
    const replacefunc = (match: string, chrs :any[]) => {
      return chrs[0]?.toUpperCase();
    };

    const camelize: string = curso.replace(/\b(\w)/g, replacefunc);
    
    if(camelize != '')
      this.cursoService.addCurso(camelize);    
  }
}
