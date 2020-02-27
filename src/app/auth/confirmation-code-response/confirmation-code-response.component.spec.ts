import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCodeResponseComponent } from './confirmation-code-response.component';

describe('ConfirmationCodeResponseComponent', () => {
  let component: ConfirmationCodeResponseComponent;
  let fixture: ComponentFixture<ConfirmationCodeResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationCodeResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationCodeResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
