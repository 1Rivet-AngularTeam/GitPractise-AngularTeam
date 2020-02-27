import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmitChauhanComponent } from './amit-chauhan.component';

describe('AmitChauhanComponent', () => {
  let component: AmitChauhanComponent;
  let fixture: ComponentFixture<AmitChauhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmitChauhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmitChauhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
