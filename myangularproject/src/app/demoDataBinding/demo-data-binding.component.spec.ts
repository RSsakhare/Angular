import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDataBindingComponent } from './demo-data-binding.component';

describe('DemoDataBindingComponent', () => {
  let component: DemoDataBindingComponent;
  let fixture: ComponentFixture<DemoDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoDataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
