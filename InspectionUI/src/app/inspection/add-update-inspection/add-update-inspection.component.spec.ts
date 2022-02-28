import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateInspectionComponent } from './add-update-inspection.component';

describe('AddUpdateInspectionComponent', () => {
  let component: AddUpdateInspectionComponent;
  let fixture: ComponentFixture<AddUpdateInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
