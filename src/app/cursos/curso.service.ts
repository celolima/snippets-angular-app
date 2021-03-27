import { Injectable } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursos: string[] = ['Java', 'Angular', 'Flutter'];

  constructor(private logService: LogService) { }

  getCursos(): string[] {
    this.logService.addLog("Getting Cursos");
    return this.cursos;
  }
  
  addCurso(curso: string) {
    this.logService.addLog(`Pushing curso: ${curso}`);
    this.cursos.push(curso);
  }
}
  