import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LockedDownComponent} from './locked-down.component';

describe('LockedDownComponent', () => {
  let component: LockedDownComponent;
  let fixture: ComponentFixture<LockedDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
