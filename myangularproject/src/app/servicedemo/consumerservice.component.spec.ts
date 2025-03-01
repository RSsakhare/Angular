import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerserviceComponent } from './consumerservice.component';

describe('ConsumerserviceComponent', () => {
  let component: ConsumerserviceComponent;
  let fixture: ComponentFixture<ConsumerserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
