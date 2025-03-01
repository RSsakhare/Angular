import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExComponent } from './company-ex.component';

describe('CompanyExComponent', () => {
  let component: CompanyExComponent;
  let fixture: ComponentFixture<CompanyExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyExComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
