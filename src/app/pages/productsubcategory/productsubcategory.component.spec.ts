import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsubcategoryComponent } from './productsubcategory.component';

describe('ProductsubcategoryComponent', () => {
  let component: ProductsubcategoryComponent;
  let fixture: ComponentFixture<ProductsubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsubcategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
