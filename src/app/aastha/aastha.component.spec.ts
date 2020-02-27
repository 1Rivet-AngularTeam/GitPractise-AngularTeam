import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AasthaComponent } from './aastha.component';

describe('AasthaComponent', () => {
  let component: AasthaComponent;
  let fixture: ComponentFixture<AasthaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AasthaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AasthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
