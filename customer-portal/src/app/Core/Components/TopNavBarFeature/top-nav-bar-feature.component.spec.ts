import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarFeatureComponent } from './top-nav-bar-feature.component';

describe('TopNavBarFeatureComponent', () => {
    let component: TopNavBarFeatureComponent;
    let fixture: ComponentFixture<TopNavBarFeatureComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TopNavBarFeatureComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopNavBarFeatureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
