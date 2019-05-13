import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubAComponent } from './dashboard-sub-a.component';

describe('DashboardSubAComponent', () => {
  let component: DashboardSubAComponent;
  let fixture: ComponentFixture<DashboardSubAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSubAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSubAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
