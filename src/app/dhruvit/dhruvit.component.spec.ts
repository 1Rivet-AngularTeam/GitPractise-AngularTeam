import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhruvitComponent } from './dhruvit.component';

describe('DhruvitComponent', () => {
  let component: DhruvitComponent;
  let fixture: ComponentFixture<DhruvitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhruvitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhruvitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
