import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailServiceService {

  constructor(private http: HttpClient) { }

  verifyEmail(email: String) {
    return this.http.get('assets/dados/listaEmails.json')
      .pipe(
        delay(2000),
        map((dados: {emails: any[]}) => dados.emails),
        //tap(console.log),
        map((dados: {email: string}[]) => dados.filter(v => v.email === email)),
        //tap(console.log),
        map((dados: any[]) => dados.length > 0),
        //tap(console.log)
      );
  }

}
