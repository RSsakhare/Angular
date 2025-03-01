import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathComponent } from './math.component';

describe('MathComponent', () => {
  let component: MathComponent;
  let fixture: ComponentFixture<MathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Test case for add method
  it('Should test sum of two numbers',()=>{
    //Arrange
    const component = new MathComponent();
    const a=5;
    const b=5;
    //Act
    const total = component.add(a,b);
    //Assert
    expect(total).toEqual(10);
  });
});
