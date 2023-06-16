import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitDuMoisComponent } from './hit-du-mois.component';

describe('HitDuMoisComponent', () => {
  let component: HitDuMoisComponent;
  let fixture: ComponentFixture<HitDuMoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HitDuMoisComponent]
    });
    fixture = TestBed.createComponent(HitDuMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
