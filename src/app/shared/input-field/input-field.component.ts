import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {

  @Input() id: string;
  @Input() label: string;
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() formControl: any;

  constructor() { }

}
