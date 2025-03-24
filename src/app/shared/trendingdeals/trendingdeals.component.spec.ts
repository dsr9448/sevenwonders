import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingdealsComponent } from './trendingdeals.component';

describe('TrendingdealsComponent', () => {
  let component: TrendingdealsComponent;
  let fixture: ComponentFixture<TrendingdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingdealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
