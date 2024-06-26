import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListComponentComponent } from './cart-list-component.component';

describe('CartListComponentComponent', () => {
  let component: CartListComponentComponent;
  let fixture: ComponentFixture<CartListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
