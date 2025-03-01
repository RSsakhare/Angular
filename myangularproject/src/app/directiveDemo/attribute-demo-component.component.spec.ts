import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDemoComponentComponent } from './attribute-demo-component.component';

describe('AttributeDemoComponentComponent', () => {
  let component: AttributeDemoComponentComponent;
  let fixture: ComponentFixture<AttributeDemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDemoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
