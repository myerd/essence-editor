import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayofworkComponent } from './wayofwork.component';

describe('WayofworkComponent', () => {
  let component: WayofworkComponent;
  let fixture: ComponentFixture<WayofworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WayofworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WayofworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
