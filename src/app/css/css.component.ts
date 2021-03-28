import { Component, OnInit } from '@angular/core';
import { CssService } from './css.service';
import { JustifyContentTypes } from './justify-content-types';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  automarginSnippet: string;
  typesOfCssPosition: string[];
  floatSnippet: string;
  flexProperties: string[];
  justifyContentTypes: JustifyContentTypes[];

  constructor(private  cssService: CssService) { }

  ngOnInit(): void {
    this.automarginSnippet = this.cssService.getAutomarginSnippet();
    this.typesOfCssPosition = this.cssService.getTypesOfCssPosition();
    this.floatSnippet = this.cssService.getFloatSnippet();
    this.flexProperties = this.cssService.getFlexProperties();
    this.justifyContentTypes = this.cssService.getFlexJustifyProperties();
  }

}
