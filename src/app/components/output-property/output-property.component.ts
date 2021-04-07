import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  valNumber: number = 0;

  @Output() onValueChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    
  }

  change(isIncrement: boolean) {
    if(isIncrement) this.valNumber++;
    else this.valNumber--;

    this.onValueChanged.emit(this.valNumber)
  }

}
