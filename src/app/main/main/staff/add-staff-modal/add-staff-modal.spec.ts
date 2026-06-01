import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffModal } from './add-staff-modal';

describe('AddStaffModal', () => {
  let component: AddStaffModal;
  let fixture: ComponentFixture<AddStaffModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStaffModal],
    }).compileComponents();

    fixture = TestBed.createComponent(AddStaffModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
