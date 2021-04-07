import { Injectable } from '@angular/core';
import { JustifyContentTypes } from './justify-content-types';

@Injectable({
  providedIn: 'root'
})
export class CssService {

  getAutomarginSnippet() :string{
    return `
    p {
      width: 400px;
      margin: 0 auto;
    }`;
  }

  getTypesOfCssPosition() :string[] {
    return ['static','relative','absolute','fixed'];
  }

  getFloatSnippet() :string {
    return `
    .box-bottom {
      background-color: DeepSkyBlue;
      float: right;
      }
    `;
  }

  getFlexProperties() :string[] {
    return [
      'justify-content',
      'align-items',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'flex',
      'flex-wrap',
      'align-content',
      'flex-direction',
      'flex-flow'
    ];
  }

  getFlexJustifyProperties() :JustifyContentTypes[]{
    let types :JustifyContentTypes[] = [];
    
    types.push(new JustifyContentTypes('flex-start', 'all items will be positioned in order, starting from the left of the parent container, with no extra space between or before them.'));
    types.push(new JustifyContentTypes('flex-end', 'all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.'));
    types.push(new JustifyContentTypes('center', 'all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them.'));
    types.push(new JustifyContentTypes('space-around', 'items will be positioned with equal space before and after each item, resulting in double the space between elements.'));
    types.push(new JustifyContentTypes('space-between', 'items will be positioned with equal space between them, but no extra space before the first or after the last elements.'));

    return types;
  }

  constructor() { }
}
