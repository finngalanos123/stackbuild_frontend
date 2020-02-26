import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperDirectionButtonsComponent } from './stepper-direction-buttons.component';

describe('StepperDirectionButtonsComponent', () => {
  let component: StepperDirectionButtonsComponent;
  let fixture: ComponentFixture<StepperDirectionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperDirectionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperDirectionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
