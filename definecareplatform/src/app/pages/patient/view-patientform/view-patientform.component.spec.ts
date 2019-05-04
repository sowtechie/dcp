import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientformComponent } from './view-patientform.component';

describe('ViewPatientformComponent', () => {
  let component: ViewPatientformComponent;
  let fixture: ComponentFixture<ViewPatientformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPatientformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
