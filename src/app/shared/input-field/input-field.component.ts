import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() id: string;
  @Input() label: string;
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() formControl: FormControl;

  constructor() { }

  ngOnInit(): void {

  }

}
