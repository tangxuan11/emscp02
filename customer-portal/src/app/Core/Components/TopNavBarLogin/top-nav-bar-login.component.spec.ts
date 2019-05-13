import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarLoginComponent } from './top-nav-bar-login.component';

describe('TopNavBarLoginComponent', () => {
  let component: TopNavBarLoginComponent;
  let fixture: ComponentFixture<TopNavBarLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavBarLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavBarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
