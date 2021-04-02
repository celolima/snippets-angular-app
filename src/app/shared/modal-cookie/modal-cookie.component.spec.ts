import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCookieComponent } from './modal-cookie.component';

describe('ModalCookieComponent', () => {
  let component: ModalCookieComponent;
  let fixture: ComponentFixture<ModalCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCookieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
