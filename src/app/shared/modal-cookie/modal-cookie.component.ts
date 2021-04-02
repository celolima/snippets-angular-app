import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-cookie',
  templateUrl: './modal-cookie.component.html',
  styleUrls: ['./modal-cookie.component.css']
})
export class ModalCookieComponent implements OnInit {

  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.hide = false;
  }

  toogleHide() {
    this.hide = !this.hide;
  }

}
