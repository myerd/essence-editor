import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEndeavorDialogComponent } from './add-endeavor-dialog.component';

describe('AddEndeavorDialogComponent', () => {
  let component: AddEndeavorDialogComponent;
  let fixture: ComponentFixture<AddEndeavorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEndeavorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEndeavorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
