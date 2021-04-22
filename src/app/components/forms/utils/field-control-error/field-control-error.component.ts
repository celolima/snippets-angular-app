import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-control-error',
  templateUrl: './field-control-error.component.html',
  styleUrls: ['./field-control-error.component.css']
})
export class FieldControlErrorComponent implements OnInit {

  @Input() showError: boolean;
  @Input() msgError: string;
  @Input() alertColor = 'ERROR';

  constructor() { }

  ngOnInit(): void {
  }

}
