import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAsynchronizeFormComponent } from './demo-asynchronize-form.component';

describe('DemoAsynchronizeFormComponent', () => {
  let component: DemoAsynchronizeFormComponent;
  let fixture: ComponentFixture<DemoAsynchronizeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoAsynchronizeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoAsynchronizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
