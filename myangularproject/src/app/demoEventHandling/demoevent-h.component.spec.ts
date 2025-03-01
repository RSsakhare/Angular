import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoeventHComponent } from './demoevent-h.component';

describe('DemoeventHComponent', () => {
  let component: DemoeventHComponent;
  let fixture: ComponentFixture<DemoeventHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoeventHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoeventHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
