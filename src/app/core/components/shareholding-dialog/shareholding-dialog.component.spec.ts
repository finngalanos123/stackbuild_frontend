import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholdingDialogComponent } from './shareholding-dialog.component';

describe('ShareholdingDialogComponent', () => {
  let component: ShareholdingDialogComponent;
  let fixture: ComponentFixture<ShareholdingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareholdingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholdingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
