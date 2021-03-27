import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private datePipe: DatePipe) { }

  addLog(message: string) {    
    console.log(`[Log] ${this.getCurDateFormatted()} : ${message}`);
  }
  
  private getCurDateFormatted() :string {
    return this.datePipe.transform(Date.now(), 'medium');
  }
}
