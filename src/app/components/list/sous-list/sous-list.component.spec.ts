import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousListComponent } from './sous-list.component';

describe('SousListComponent', () => {
  let component: SousListComponent;
  let fixture: ComponentFixture<SousListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
