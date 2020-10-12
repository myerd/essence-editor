import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoftwaresystemsDialogComponent } from './add-softwaresystems-dialog.component';

describe('AddSoftwaresystemsDialogComponent', () => {
  let component: AddSoftwaresystemsDialogComponent;
  let fixture: ComponentFixture<AddSoftwaresystemsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSoftwaresystemsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSoftwaresystemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
