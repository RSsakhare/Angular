import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMyformComponent } from './demo-myform.component';

describe('DemoMyformComponent', () => {
  let component: DemoMyformComponent;
  let fixture: ComponentFixture<DemoMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoMyformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
