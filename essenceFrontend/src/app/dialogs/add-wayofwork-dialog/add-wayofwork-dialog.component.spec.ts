import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWayofworkDialogComponent } from './add-wayofwork-dialog.component';

describe('AddWayofworkDialogComponent', () => {
  let component: AddWayofworkDialogComponent;
  let fixture: ComponentFixture<AddWayofworkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWayofworkDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWayofworkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
