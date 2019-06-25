import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTrafficSummaryComponent } from './channel-traffic-summary.component';

describe('ChannelTrafficSummaryComponent', () => {
  let component: ChannelTrafficSummaryComponent;
  let fixture: ComponentFixture<ChannelTrafficSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelTrafficSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelTrafficSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
