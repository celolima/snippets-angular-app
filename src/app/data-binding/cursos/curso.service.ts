import { Injectable } from '@angular/core';  
import { LogService } from 'src/app/shared/log-service/log.service';

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

  getAsyncCursos(): Promise<String[]> {
    this.logService.addLog("Getting Cursos");
    return new Promise((resolve,reject) => {
      setTimeout(() => resolve(this.cursos), 5000);
    });
  }

  getAsyncText(): Promise<String> {
    this.logService.addLog("Getting Text");
    return new Promise((resolve,reject) => {
      setTimeout(() => resolve(this.cursos[0]), 1000);
    });
  }

}
  