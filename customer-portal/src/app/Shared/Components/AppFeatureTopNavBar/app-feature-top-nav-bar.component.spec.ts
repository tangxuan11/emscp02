import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFeatureTopNavBarComponent } from './app-feature-top-nav-bar.component';

describe('AppFeatureTopNavBarComponent', () => {
  let component: AppFeatureTopNavBarComponent;
  let fixture: ComponentFixture<AppFeatureTopNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFeatureTopNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFeatureTopNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
