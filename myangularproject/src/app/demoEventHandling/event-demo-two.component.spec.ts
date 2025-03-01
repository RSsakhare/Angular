import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDemoTwoComponent } from './event-demo-two.component';

describe('EventDemoTwoComponent', () => {
  let component: EventDemoTwoComponent;
  let fixture: ComponentFixture<EventDemoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDemoTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDemoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
