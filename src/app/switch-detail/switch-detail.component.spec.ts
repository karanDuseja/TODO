import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDetailComponent } from './switch-detail.component';

describe('SwitchDetailComponent', () => {
  let component: SwitchDetailComponent;
  let fixture: ComponentFixture<SwitchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
