import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceBasicsComponent } from './insurance-basics.component';

describe('InsuranceBasicsComponent', () => {
  let component: InsuranceBasicsComponent;
  let fixture: ComponentFixture<InsuranceBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
