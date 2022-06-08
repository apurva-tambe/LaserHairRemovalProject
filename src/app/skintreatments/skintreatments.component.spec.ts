import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkintreatmentsComponent } from './skintreatments.component';

describe('SkintreatmentsComponent', () => {
  let component: SkintreatmentsComponent;
  let fixture: ComponentFixture<SkintreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkintreatmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkintreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
