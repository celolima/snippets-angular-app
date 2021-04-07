import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-cookie',
  templateUrl: './modal-cookie.component.html',
  styleUrls: ['./modal-cookie.component.css']
})
export class ModalCookieComponent implements OnInit {

  hide: boolean;

  constructor() { }

  ngOnInit(): void {
    this.hide = true;
  }

  toogleHide() {
    this.hide = !this.hide;
  }

}
