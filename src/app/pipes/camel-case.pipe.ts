import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let words: string[]= value.split(' ');
    let result = '';

    words.forEach((w, index) => {
      result += this.capitalize(w);
      if(index + 1 < words.length) {
        result += ' ';
      }
    });
    
    return result;
  }

  capitalize(word: string) :string {
    let result = word.substr(0,1).toLocaleUpperCase() 
      + word.substr(1).toLocaleLowerCase();
    
    return result;
  }

}
