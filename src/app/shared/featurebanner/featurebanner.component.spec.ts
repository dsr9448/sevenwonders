import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturebannerComponent } from './featurebanner.component';

describe('FeaturebannerComponent', () => {
  let component: FeaturebannerComponent;
  let fixture: ComponentFixture<FeaturebannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturebannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
