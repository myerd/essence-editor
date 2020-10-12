import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequirementsDialogComponent } from './add-requirements-dialog.component';

describe('AddRequirementsDialogComponent', () => {
  let component: AddRequirementsDialogComponent;
  let fixture: ComponentFixture<AddRequirementsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRequirementsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRequirementsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
