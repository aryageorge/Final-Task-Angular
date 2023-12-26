import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveDashboardComponent } from './employee-leave-dashboard.component';

describe('EmployeeLeaveDashboardComponent', () => {
  let component: EmployeeLeaveDashboardComponent;
  let fixture: ComponentFixture<EmployeeLeaveDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeLeaveDashboardComponent]
    });
    fixture = TestBed.createComponent(EmployeeLeaveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
