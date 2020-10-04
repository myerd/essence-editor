import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaresystemComponent } from './softwaresystem.component';

describe('SoftwaresystemComponent', () => {
  let component: SoftwaresystemComponent;
  let fixture: ComponentFixture<SoftwaresystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwaresystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwaresystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
