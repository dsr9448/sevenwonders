import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloderComponent } from './preloder.component';

describe('PreloderComponent', () => {
  let component: PreloderComponent;
  let fixture: ComponentFixture<PreloderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreloderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreloderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
