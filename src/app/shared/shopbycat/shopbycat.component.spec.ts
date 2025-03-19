import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbycatComponent } from './shopbycat.component';

describe('ShopbycatComponent', () => {
  let component: ShopbycatComponent;
  let fixture: ComponentFixture<ShopbycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopbycatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopbycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
