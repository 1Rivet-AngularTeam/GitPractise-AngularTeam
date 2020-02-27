import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivComponentComponent } from './shiv-component.component';

describe('ShivComponentComponent', () => {
  let component: ShivComponentComponent;
  let fixture: ComponentFixture<ShivComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShivComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShivComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
