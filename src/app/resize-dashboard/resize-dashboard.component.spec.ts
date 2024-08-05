import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeDashboardComponent } from './resize-dashboard.component';

describe('ResizeDashboardComponent', () => {
  let component: ResizeDashboardComponent;
  let fixture: ComponentFixture<ResizeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResizeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
