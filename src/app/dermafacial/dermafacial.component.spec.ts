import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermafacialComponent } from './dermafacial.component';

describe('DermafacialComponent', () => {
  let component: DermafacialComponent;
  let fixture: ComponentFixture<DermafacialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DermafacialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DermafacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
