import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeDropDownComponent } from './dark-mode-drop-down.component';

describe('DarkModeDropDownComponent', () => {
  let component: DarkModeDropDownComponent;
  let fixture: ComponentFixture<DarkModeDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkModeDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkModeDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
