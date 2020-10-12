import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStakeholdersDialogComponent } from './add-stakeholders-dialog.component';

describe('AddStakeholdersDialogComponent', () => {
  let component: AddStakeholdersDialogComponent;
  let fixture: ComponentFixture<AddStakeholdersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStakeholdersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStakeholdersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
