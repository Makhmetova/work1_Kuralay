import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HreComponent } from './hre.component';

describe('HreComponent', () => {
  let component: HreComponent;
  let fixture: ComponentFixture<HreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
