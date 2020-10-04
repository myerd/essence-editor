import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndeavorComponent } from './endeavor.component';

describe('EndeavorComponentComponent', () => {
  let component: EndeavorComponent;
  let fixture: ComponentFixture<EndeavorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndeavorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndeavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
