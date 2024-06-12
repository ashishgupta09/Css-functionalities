import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAnimationButtonComponent } from './color-animation-button.component';

describe('ColorAnimationButtonComponent', () => {
  let component: ColorAnimationButtonComponent;
  let fixture: ComponentFixture<ColorAnimationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorAnimationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorAnimationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
