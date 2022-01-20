import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUnavoidableOverviewComponent } from './product-unavoidable-overview.component';

describe('ProductUnavoidableOverviewComponent', () => {
  let component: ProductUnavoidableOverviewComponent;
  let fixture: ComponentFixture<ProductUnavoidableOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUnavoidableOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUnavoidableOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
