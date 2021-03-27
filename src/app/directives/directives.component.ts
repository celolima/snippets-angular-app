import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isThumbUp: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleThumb() {
    this.isThumbUp = !this.isThumbUp;
  }

}
