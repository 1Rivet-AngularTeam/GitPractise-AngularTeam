import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamipComponent } from './samip.component';

describe('SamipComponent', () => {
  let component: SamipComponent;
  let fixture: ComponentFixture<SamipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
