import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchBoxComponent } from './input-search-box.component';

describe('InputSearchBoxComponent', () => {
  let component: InputSearchBoxComponent;
  let fixture: ComponentFixture<InputSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
