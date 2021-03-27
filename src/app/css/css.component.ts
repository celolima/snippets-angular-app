import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  automarginSnippet: string = `
    p {
      width: 400px;
      margin: 0 auto;
    }`;
      
  typesOfCssPosition: string[] = ['static','relative','absolute','fixed'];

  floatSnippet: string = `
    .box-bottom {
      background-color: DeepSkyBlue;
      float: right;
    }
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
