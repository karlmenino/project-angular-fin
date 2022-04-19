import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsFormulaireComponent } from './cars-formulaire.component';

describe('CarsFormulaireComponent', () => {
  let component: CarsFormulaireComponent;
  let fixture: ComponentFixture<CarsFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
