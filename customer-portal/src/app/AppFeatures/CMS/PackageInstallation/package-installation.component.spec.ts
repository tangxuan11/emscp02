import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageInstallationComponent } from './package-installation.component';

describe('PackageInstallationComponent', () => {
  let component: PackageInstallationComponent;
  let fixture: ComponentFixture<PackageInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
