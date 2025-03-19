import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcaroComponent } from './productcaro.component';

describe('ProductcaroComponent', () => {
  let component: ProductcaroComponent;
  let fixture: ComponentFixture<ProductcaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcaroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
