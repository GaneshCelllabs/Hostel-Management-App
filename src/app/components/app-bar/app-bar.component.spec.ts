import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarComponent } from './app-bar.component';

describe('AppBarComponent', () => {
  let component: AppBarComponent;
  let fixture: ComponentFixture<AppBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppBarComponent]
    });
    fixture = TestBed.createComponent(AppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});