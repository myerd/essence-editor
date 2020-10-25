import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarddataDialogComponent } from './add-carddata-dialog.component';

describe('AddCarddataDialogComponent', () => {
  let component: AddCarddataDialogComponent;
  let fixture: ComponentFixture<AddCarddataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarddataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarddataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
