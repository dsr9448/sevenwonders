import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingfastComponent } from './sellingfast.component';

describe('SellingfastComponent', () => {
  let component: SellingfastComponent;
  let fixture: ComponentFixture<SellingfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellingfastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
