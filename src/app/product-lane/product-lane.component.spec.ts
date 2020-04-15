import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLaneComponent } from './product-lane.component';

describe('ProductLaneComponent', () => {
  let component: ProductLaneComponent;
  let fixture: ComponentFixture<ProductLaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
